<p align="center">
  <img src="https://i.ibb.co/D9XRM84/ctrl-v.png">
</p>

# ctrl-v

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/abdus/ctrl-v/)

> ctrl-v is a service similar to [pastebin.com](https://pastebin.com). Built on
> top of [Netlify](https://netlify.com)'s Cloud Lambda Functions, it's
> ridiculously easy to deploy your own instance.

This paste service is open to all, meaning anyone who can access deployed
instance's URL, can easily create new paste. I designed it this way on-purpose
because I don't want to login everytime I try to share a damn paste.

Why not any other paste service, like [pastebin](https://pastebin.com) or
[open-source hastebin](https://hastebin.com)? because, in case of Pastebin I
won't have access to my pastes(unless I login). And hastebin needs a full-blown
server to host it. So, I planned to roll my own software.

## Features

- Minimal Design - No bloats in webpage. Just the paste you need to see.
- API - Integrate it with whatever you want.
- Syntax Highlighting - Supports 167 Languages (via [Highlight.js](https://highlightjs.org/)).
- Dark Syntax Theme - No light syntax theme at all :)
- SSR - Pages are rendered on Server(including syntax highlighting). Use it
  without JS being enabled
- No JavaScript! - Uses 0 lines of JavaScript code in Client Side (there was no
  need)
- Personal Branding - Host it under your own domain :)

## Upcoming Features

- More Robust API - Currently, the API interface is not quite good.
- Documentation - API needs to be documented
- Line Numbers - I need to find a way to add line numbers, as Highlight.js does
  not support it.
- Delete Paste - Currently, pastes can be deleted using
  [FaunaDB](https://faunadb.com) web interface. I need to implement this
  natively in paste website.

## Installation

> You need to create an account on FaunaDB website to get a Database. It's free.

You don't even need to clone this repository in order to deploy it. Simply [click
here](https://app.netlify.com/start/deploy?repository=https://github.com/abdus/ctrl-v/)
to deploy it to Netlify.

Once it gets deployed, go to Netlify dashboard and [add environment
variables](https://docs.netlify.com/configure-builds/environment-variables) from
[.env.example](./.env.example). That's it! You are done :)

### Custom Domain

Follow this [Netlify Documentation](https://docs.netlify.com/domains-https/custom-domains/)

## Contributing

If you want to improve this project in any ways, you are welcome :) Open a
[GitHub issue](https://github.com/abdus/ctrl-v/issues) and start working.

## License

SourceCode is licensed under the [MIT License](./LICENSE).
