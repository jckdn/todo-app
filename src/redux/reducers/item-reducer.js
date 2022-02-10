import { CREATE_ITEM } from '../actions/action-types';

export default function itemReducer(items = [], action) {
  switch (action.type) {
    case CREATE_ITEM:
      return [...items, { ...action.item }];
    default:
      return items;
  }
}
