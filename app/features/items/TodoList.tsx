import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import itemApi from "../../api-client/item-api";

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
  const [items, setItems] = useState<Item[]>(props.items || []);
  const [newItemTitle, setNewItemTitle] = useState("");

  const getItems = async () => {
    const items = await itemApi.getItems();

    setItems(items);
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

    setItems([...items, addedItem]);
    setNewItemTitle("");
  };

  const handleToggleItemComplete = async (item: Item) => {
    const updatedItem = await itemApi.addItem({
      ...item,
      complete: !item.complete,
    });

    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );

    setItems(updatedItems);
  };

  const handleDeleteItem = async (id: number) => {
    await itemApi.deleteItem(id);

    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);
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
