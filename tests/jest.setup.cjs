/* eslint-disable no-undef */

require('whatwg-fetch');

// An empty string is fine for tests that use `msw` to mock the API calls.
process.env.API_URL = '';

// Setup the `msw` mock API.
const apiServer = require('./mocks/mock-api-server');
beforeAll(() => apiServer.server.listen());
afterEach(() => apiServer.server.resetHandlers());
afterAll(() => apiServer.server.close());

/**
 * If not using `msw` in tests, uncomment this to use the `json-server` API
 * endpoint.
 */
// process.env.API_URL = 'http://localhost:3001';
