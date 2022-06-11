import { Item } from "../features/items/items-slice";
import { request, baseUrl } from "./api-utils";

const itemsUrl = `${baseUrl}/items/`;

async function getItems() {
  return request<Item[]>(itemsUrl, {});
}

async function addItem(item: Item) {
  const resource = itemsUrl + (item.id || "");
  const init = {
    method: item.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(item),
  };

  return request<Item>(resource, init);
}

async function deleteItem(itemId: number) {
  const resource = itemsUrl + itemId;
  const init = { method: "DELETE" };

  return request<void>(resource, init);
}

export default {
  getItems,
  addItem,
  deleteItem,
};
