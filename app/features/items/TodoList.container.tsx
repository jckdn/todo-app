import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Item, addItem, updateItem, deleteItem } from "./items-slice";
import TodoList from "./TodoList";

function TodoListContainer() {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => {
    return state.items;
  });

  const handleAddItem = (title: string) => {
    dispatch(addItem({ title, complete: false }));
  };

  const handleToggleItemComplete = (item: Item) => {
    dispatch(updateItem({ ...item, complete: !item.complete }));
  };

  const handleDeleteItem = (id: number) => {
    dispatch(deleteItem(id));
  };

  return (
    <TodoList
      items={items}
      onAddItem={handleAddItem}
      onToggleItemComplete={handleToggleItemComplete}
      onDeleteItem={handleDeleteItem}
    />
  );
}

export default TodoListContainer;
