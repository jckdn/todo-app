import { Item } from "./TodoList";

type ItemsAction =
  | { type: "get-all"; items: Item[] }
  | { type: "add"; item: Item }
  | { type: "update"; item: Item }
  | { type: "delete"; itemId: number };

export default function itemsReducer(
  items: Item[] = [],
  action: ItemsAction
): Item[] {
  switch (action.type) {
    case "get-all": {
      return action.items;
    }
    case "add": {
      return [...items, action.item];
    }
    case "update": {
      return items.map((item) =>
        item.id === action.item.id ? action.item : item
      );
    }
    case "delete": {
      return items.filter((item) => item.id !== action.itemId);
    }
  }
}
