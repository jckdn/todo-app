# README

React redux demo. Mostly from the "building applications with react and redux" PL course:
https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents

NOTE: I remove the 'activeStyle' props on NavLinks because they don't exist in latest
react-router-dom. Also the not found route doesn't work.

## TODO

- ONce done, make a versino refactored to use context aPi.
- Also make a version before we used redux to show how sate is handle just in the function
  component via hooks.
- Also make a version using boilerplate reduction options.
- ALso make a version of handling async api calls WITHOUT redux-thunk.

## Arch

- CH dev env arch (before mock API):
  - express serves the app AND the api endpoints on the same host and port - NOTE: express
    is configured serve files emitted from webpack via webpack-middleware-dev.
- CH dev env arch (with mock API):
  - json-server is used to host the mock API separate from the app on port 3001.
  - why use json-server? it creates the endpoints for us. does it tho?
- react-redux arch (with mock API):
  - same setup as above.

## Servers

- api-server

## Usage

1. `npm run format` - formats code with prettier.
2. `npm run lint` - lints JS.
3. `npm run dev` - runs the dev server.
4. Go to `http://localhost:8080` in a browser to view.
