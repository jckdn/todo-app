import { rest } from "msw";
import { setupServer } from "msw/node";
import { handlers } from "./api-handlers";

const server = setupServer(...handlers);

export { server, rest };
