import React from 'react';

const SearchResults = ({ usersListAndCount }) => {
    const { usersList, totalCount } = usersListAndCount;
    console.log('totalCount', totalCount);
    console.log('usersList', usersList);

    return (
        <div>Search Results</div>
    )
}

export default SearchResults;