import axios from 'axios';

const fetchUsersList = (query, pageNumber) => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: 'https://api.github.com/search/users',
            params: {
                accept: 'application/vnd.github.v3+json',
                q: query,
                per_page: 10,
                page: pageNumber || 1
            }
        })
        .then( ( result ) => {
            let { data } = result;
            return dispatch({
                type: 'FETCH_USERS_LIST',
                query: query,
                usersList: data.items,
                totalCount: data.total_count
            })
        })
        .catch( (err) => {
            console.log('Get user list API request err:', err)
        })
    }
};

export default fetchUsersList;
