import {createStore, combineReducers} from 'redux';
import UserReducer from './reducers/user';

const rootReducer = combineReducers({
  count: UserReducer,
});

export const store = createStore(rootReducer);
