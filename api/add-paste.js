const querystring = require("querystring");
const Faunadb = require("faunadb");
const crypto = require("crypto");
const pasteTemplate = require("./_paste-template.js");

const fdb_query = Faunadb.query;

function generateSlashTag() {
  const randBytes = crypto.randomBytes(32);
  const sha = crypto.createHash("sha256");
  const hash = sha.update(randBytes).digest("base64");
  const strip_disallowed_char = hash.replace(/[^a-zA-Z0-9]/g, "");

  return strip_disallowed_char.slice(0, 5);
}

exports.handler = (event, _context) => {
  const fdb = new Faunadb.Client({
    secret: process.env.FDB_SECRET,
  });
  const HTTP_METHOD = event.httpMethod;

  if (HTTP_METHOD !== "POST") {
    return {
      statusCode: 405,
      body: "method not allowed",
    };
  }

  const qs = querystring.parse(event.body);
  const paste = qs.paste;
  const langName = qs["lang-name"] || "plaintext";

  if (!paste) {
    return {
      statusCode: 200,
      body: pasteTemplate("no paste provided"),
    };
  }

  return fdb
    .query(
      fdb_query.Create(fdb_query.Collection("pastes"), {
        data: {
          paste: paste,
          lang: langName,
          paste_id: generateSlashTag(),
        },
      })
    )
    .then((resp) => {
      return {
        statusCode: 301,
        headers: {
          Location: "/?q=" + resp.data.paste_id,
        },
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        statusCode: 200,
        body: pasteTemplate("internal server error"),
      };
    });
};
