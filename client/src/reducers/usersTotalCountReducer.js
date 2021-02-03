export default (state = {}, action) => {
    if (action.type === 'FETCH_USERS_LIST') {
        // return {
        //     usersList: action.usersList,
        //     totalCount: action.totalCount
        // }
        return action.totalCount;
    }
    return state;
}