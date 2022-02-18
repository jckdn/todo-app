import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { Item } from './items-slice';

export interface TodoListProps {
  items: Item[];
  onAddItem: (title: string) => void;
  onToggleItemComplete: (item: Item) => void;
  onDeleteItem: (itemID: number) => void;
}

function TodoList(props: TodoListProps) {
  const { items, onAddItem, onToggleItemComplete, onDeleteItem } = props;

  const [newItemTitle, setNewItemTitle] = useState('');

  const onNewItemSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedTitle = newItemTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    onAddItem(trimmedTitle);
    setNewItemTitle('');
  };

  const addItemForm = (
    <form className="todo-list__form" onSubmit={onNewItemSubmit}>
      <input
        className="todo-list__title-input"
        type="text"
        placeholder={'Enter item title'}
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
      onToggleItemComplete={onToggleItemComplete}
      onDeleteItem={onDeleteItem}
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
