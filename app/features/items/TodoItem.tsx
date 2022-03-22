import React from "react";
import { Item } from "./TodoList";

interface Props {
  item: Item;
  onToggleItemComplete: (item: Item) => void;
  onDeleteItem: (itemID: number) => void;
}

function TodoItem(props: Props) {
  const { item, onToggleItemComplete, onDeleteItem } = props;

  return (
    <div className="todo-item">
      <input
        className="todo-item__checkbox"
        type="checkbox"
        checked={item.complete}
        onChange={() => onToggleItemComplete(item)}
      ></input>
      <span className={'todo-item__title'}>{item.title}</span>
      <button onClick={() => onDeleteItem(item.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
