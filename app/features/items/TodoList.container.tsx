import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Item, addItem, updateItem, deleteItem } from './items-slice';
import TodoList from './TodoList';

function TodoListContainer() {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => {
    return state.items;
  });

  const onAddItem = (title: string) => {
    dispatch(addItem({ title, complete: false }));
  };

  const onToggleItemComplete = (item: Item) => {
    dispatch(updateItem({ ...item, complete: !item.complete }));
  };

  const onDeleteItem = (id: number) => {
    dispatch(deleteItem(id));
  };

  return (
    <TodoList
      items={items}
      onAddItem={onAddItem}
      onToggleItemComplete={onToggleItemComplete}
      onDeleteItem={onDeleteItem}
    />
  );
}

export default TodoListContainer;
