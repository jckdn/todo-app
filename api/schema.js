export const schema = {
  type: "object",
  properties: {
    items: {
      type: "array",
      minItems: 3,
      maxItems: 5,
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            minimum: 1,
          },
          title: {
            type: "string",
            faker: "lorem.sentence",
          },
          complete: {
            type: "boolean",
          },
        },
        required: ["id", "title", "complete"],
      },
    },
  },
  required: ["items"],
};
