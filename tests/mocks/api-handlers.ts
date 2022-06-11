import { rest, RestRequest } from "msw";
import { Item } from "../../app/features/items/items-slice";

let currentItemId = 1;

function nextItemId() {
  return ++currentItemId;
}

export const handlers = [
  rest.get("/items", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Item[]>([
        {
          id: nextItemId(),
          title: "title 1",
          complete: false,
        },
        {
          id: nextItemId(),
          title: "title 2",
          complete: true,
        },
      ])
    );
  }),
  rest.post("/items", (req: RestRequest<Item>, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json<Item>({
        ...req.body,
        id: nextItemId(),
      })
    );
  }),
  rest.put("/items/:id", (req: RestRequest<Item>, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.status(200),
      ctx.json<Item>({
        ...req.body,
        id: Number(id),
      })
    );
  }),
  rest.delete("/items/:id", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];
