import { combineReducers } from 'redux';
import usersListReducer from './usersListReducer';
import usersTotalCountReducer from './usersTotalCountReducer';
// import { usersList, totalCount} from './usersListReducer.js';

export default combineReducers({
    usersList: usersListReducer,
    totalCount: usersTotalCountReducer
});

// export default combineReducers({
//     usersList: usersList,
//     totalCount: totalCount
// });