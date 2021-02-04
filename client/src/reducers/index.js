import { combineReducers } from 'redux';
import usersQueryAndListAndCountReducer from './usersQueryAndListAndCountReducer';

export default combineReducers({
    usersQueryAndListAndCount: usersQueryAndListAndCountReducer
});