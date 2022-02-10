/* eslint-disable no-unused-vars */

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
// TODO: don't compose with dev tools if in prod?
import { composeWithDevTools } from 'redux-devtools-extension';
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    // initialState,
    /**
     * Applying the reduxImmutableStateInvariant middleware will warn us if we
     * accidentally mutate store state.
     * TODO: Seems broken. Not correct way for current redux?
     */
    // composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    // composeWithDevTools(applyMiddleware(thunk))
    // compose(applyMiddleware(thunk))
    applyMiddleware(thunk)
  );
}
