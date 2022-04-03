import React, { useEffect, useReducer, useState } from "react";
import TodoItem from "./TodoItem";
import itemApi from "../../api-client/item-api";
import itemsReducer from "./items-reducer";

export interface Item {
  id?: number;
  title: string;
  complete: boolean;
}

// Items are only passed as props for unit testing purposes.
export interface TodoListProps {
  items?: Item[];
}

function TodoList(props: TodoListProps) {
  const [items, dispatch] = useReducer(itemsReducer, props.items || []);
  const [newItemTitle, setNewItemTitle] = useState("");

  const getItems = async () => {
    const items = await itemApi.getItems();
    dispatch({ type: "get-all", items });
  };

  useEffect(() => {
    getItems();
  }, []);

  const handleAddItem = async (event: React.FormEvent) => {
    event.preventDefault();

    const trimmedTitle = newItemTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    const newItem = { title: trimmedTitle, complete: false };
    const addedItem = await itemApi.addItem(newItem);
    dispatch({ type: "add", item: addedItem });
    setNewItemTitle("");
  };

  const handleToggleItemComplete = async (item: Item) => {
    const updatedItem = await itemApi.addItem({
      ...item,
      complete: !item.complete,
    });

    dispatch({ type: "update", item: updatedItem });
  };

  const handleDeleteItem = async (itemId: number) => {
    await itemApi.deleteItem(itemId);

    dispatch({ type: "delete", itemId });
  };

  const addItemForm = (
    <form className="todo-list__form" onSubmit={handleAddItem}>
      <input
        className="todo-list__title-input"
        type="text"
        placeholder={"Enter item title"}
        value={newItemTitle}
        onChange={(event) => setNewItemTitle(event.currentTarget.value)}
      ></input>
      <button disabled={!newItemTitle.trim()}>Add</button>
    </form>
  );

  const listItems = items.map((item: Item) => (
    <TodoItem
      key={item.id}
      item={item}
      onToggleItemComplete={handleToggleItemComplete}
      onDeleteItem={handleDeleteItem}
    ></TodoItem>
  ));

  return (
    <>
      {addItemForm}
      <div className="todo-list__list">{listItems}</div>
    </>
  );
}

export default TodoList;
