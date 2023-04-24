import {combineReducers} from 'redux';
import users from './users';
import auth from './login';

const rootReducer = combineReducers({
    auth:auth,
    users:users,
});
export default rootReducer;