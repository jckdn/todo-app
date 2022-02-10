import * as types from './action-types';
import * as itemApi from '../../api/item-api';

export function createItem(item) {
  return { type: types.CREATE_ITEM, item };
}

export function getItems() {
  // TODO: Somehow make this work?
  itemApi.getItems();
}
