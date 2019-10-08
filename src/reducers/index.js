import { combineReducers } from 'redux';
import UsersReducer   from './reducers_users'
const rootReducer = combineReducers({
 users :UsersReducer
});

export default rootReducer;
