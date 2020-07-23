import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { fetchUsers } from './actions/appActions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.dispatch(fetchUsers())

export default store;
