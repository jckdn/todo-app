# To-Do List App

A very simple to-do list web app, for demonstration and learning purposes. Main branch
should contain an ideal implementation. Others may contain over-engineered solutions as
examples.

## Features

A very simple responsive to-do list app with features for adding and deleting to-do items
and marking them as complete.

## Architecture

- The client app and its tests are written in TypeScript.
- Data is persisted to a JSON document via
  [json-server](https://github.com/typicode/json-server) (a fake REST API that is
  real enough for this demo).
  - On API startup the 'DB' is populated with some fake data via
    [json-schema-faker](https://github.com/json-schema-faker/json-schema-faker).
- UI tests are integrated with mock API calls.
  - Uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
  - API calls are mocked via [Mock Service Worker (MSW)](https://mswjs.io/) - the actual
    API could be used in the tests but using msw is easier.
- The app is bundled using [webpack](https://webpack.js.org/).
- The development build is run in-memory via **webpack-dev-server**.
- The production build is hosted via
  [http-server](https://github.com/http-party/http-server).

## Some things I would do differently if I was to make this a real app

- Try using another framework/bundler such as [Next.js](https://nextjs.org/) or
  [Parcel](https://parceljs.org/) as opposed to this bare-metal-esque environment.
- Implement a real API and DB (using [Koa](https://koajs.com/) and
  [MongoDB](https://www.mongodb.com/) or similar).
- Put some thought into target browsers and implement [Babel](https://babeljs.io/) into the toolchain.
- Actually use some nice looking component styles.

## Usage

```bash
npm run format # formats (most) files/code with prettier.
npm run lint # lints with ESLint.
npm test # runs Jest tests (UI tests integrated with state management and mock API calls).
npm run api # starts the API server (with a generated fake JSON document DB) at http://localhost:3001.
npm run client # starts the app dev server (with hot reloading) at http://localhost:3000.
npm run dev # Run the API and app concurrently.
npm run build # emits production build of the client app to dist/.
npm start # hosts the production build at http://localhost:8080.
```

## TODO

#### Features

- Loading spinners/indicators for all the async operations.
- Graceful API call failure handling with friendly error messages.

#### Dev

- Make a mobx branch.
- Make a graphql branch.
- Make use of Context API and React Router somehow.
- Would be nice to just use TS and ESM everywhere, instead of JS and CJS in places
  ([Babel](https://babeljs.io/) would help).
- Tests for the unhappy paths, i.e, API POST/PUT validation errors and timeouts.
- Any remaining `TODO:` style comments in the code.
- Replace any remaining fireEvent usages with user-event api https://testing-library.com/docs/user-event/intro
