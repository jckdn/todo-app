import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Item, addItem, updateItem, deleteItem } from "./items-slice";

function TodoList() {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => {
    return state.items;
  });

  const [newItemTitle, setNewItemTitle] = useState("");

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault();

    const trimmedTitle = newItemTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    dispatch(addItem({ title: trimmedTitle, complete: false }));

    setNewItemTitle("");
  };

  const handleToggleItemComplete = (item: Item) => {
    dispatch(updateItem({ ...item, complete: !item.complete }));
  };

  const handleDeleteItem = (id: number) => {
    dispatch(deleteItem(id));
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
      <input type="submit" value="Add" disabled={!newItemTitle.trim()}></input>
    </form>
  );

  const itemsList = items.map((item: Item) => (
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
      {itemsList}
    </>
  );
}

export default TodoList;
