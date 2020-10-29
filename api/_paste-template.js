module.exports = (paste, paste_id) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${paste_id || 'code-bin'}</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      * {
        font-family: "Space Mono", monospace;
        box-sizing: border-box;
      }

      body,
      html {
        margin: 0;
        background-color: #282c34;
      }

      main {
        max-width: 80rem;
        width: 100%;
        margin: 1rem auto 1rem auto;
        padding: 0.4rem;
        overflow: auto;
        color: #fff;
      }

      pre {
        margin: 0;
      }
    </style>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/styles/atom-one-dark.min.css"
      integrity="sha512-Fcqyubi5qOvl+yCwSJ+r7lli+CO1eHXMaugsZrnxuU4DVpLYWXTVoHy55+mCb4VZpMgy7PBhV7IiymC0yu9tkQ=="
      crossorigin="anonymous"
    />
  </head>
  <body>
    <main>${paste}</main>
    <footer style="padding: 1rem; max-width: 60rem; margin: 3rem auto auto auto;text-align: center;">
      <a href="https://github.com/abdus/code-bin" style="color: cyan;text-decoration: none">SourceCode on GitHub</a>
    </footer>
  </body>
</html>`;
