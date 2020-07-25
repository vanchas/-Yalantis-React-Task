import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchUsers } from './actions';
import { combineReducers } from "redux"
import reducer from "./reducer";

const rootReducer = combineReducers({
  app: reducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.dispatch(fetchUsers())

export default store;
