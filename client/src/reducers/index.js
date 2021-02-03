import { combineReducers } from 'redux';
import usersListAndCountReducer from './usersListAndCountReducer';

export default combineReducers({
    usersListAndCount: usersListAndCountReducer
});