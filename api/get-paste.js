const Faunadb = require("faunadb");
const hljs = require("highlight.js");
const pasteTemplate = require("./_paste-template.js");

const fdb_query = Faunadb.query;

exports.handler = async (event, _context) => {
  const fdb = new Faunadb.Client({
    secret: process.env.FDB_SECRET,
  });
  const HTTP_METHOD = event.httpMethod;

  if (HTTP_METHOD !== "GET") {
    return {
      statusCode: 405,
      body: "method not allowed",
    };
  }

  const PASTE_ID = event.queryStringParameters.q || null;

  if (!PASTE_ID) {
    return {
      statusCode: 301,
      headers: {
        Location: "/new",
      },
    };
  }

  return fdb
    .query(
      fdb_query.Map(
        fdb_query.Paginate(
          fdb_query.Match(fdb_query.Index("search_pastes_by_id"), PASTE_ID)
        ),
        fdb_query.Lambda("pastes", fdb_query.Get(fdb_query.Var("pastes")))
      )
    )
    .then((r) => {
      if (r.data.length <= 0) {
        return {
          statusCode: 404,
          body: pasteTemplate("paste Not Found with id " + PASTE_ID),
        };
      }

      return {
        statusCode: 200,
        body: pasteTemplate(
          `<pre><code class="hljs ${r.data[0].data.lang}">` +
            hljs.highlightAuto(r.data[0].data.paste).value +
            `</code></pre>`,
          r.data[0].data.paste_id
        ),
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        statusCode: 500,
        body: pasteTemplate("internal server error"),
      };
    });
};
