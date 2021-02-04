export default (state = { usersList: [], totalCount: 0 }, action) => {
    if (action.type === 'FETCH_USERS_LIST') {
        return {
            usersList: action.usersList,
            totalCount: action.totalCount
        }
    }
    return state;
}