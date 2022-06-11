import React from "react";
import classNames from "classnames";
import { Item } from "./items-slice";

interface Props {
  item: Item;
  onToggleItemComplete: (item: Item) => void;
  onDeleteItem: (itemID: number) => void;
}

function TodoItem(props: Props) {
  const { item, onToggleItemComplete, onDeleteItem } = props;

  const renderTitle = () => {
    const className = classNames("todo-item__title", {
      "todo-item__title--complete": item.complete,
    });

    return <span className={className}>{item.title}</span>;
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.complete}
        onChange={() => onToggleItemComplete(item)}
      ></input>
      {renderTitle()}
      <button onClick={() => onDeleteItem(item.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
