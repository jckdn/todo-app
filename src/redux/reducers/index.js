import { combineReducers } from 'redux';
import items from './item-reducer';

const rootReducer = combineReducers({
  items,
});

export default rootReducer;
