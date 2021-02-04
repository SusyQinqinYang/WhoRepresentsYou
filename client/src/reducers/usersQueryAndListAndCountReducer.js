export default (state = { usersList: [], totalCount: 0, query: '' }, action) => {
    if (action.type === 'FETCH_USERS_LIST') {
        return {
            usersList: action.usersList,
            totalCount: action.totalCount,
            query: action.query,
        }
    }
    return state;
}