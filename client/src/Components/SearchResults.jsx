import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import EachUser from './EachUser.jsx';
import ReactPaginate from 'react-paginate';

const SearchResults = ({ usersListAndCount }) => {
    const { usersList, totalCount } = usersListAndCount;
    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        if (totalCount > 0) {
            setPageCount(Math.ceil(totalCount / 10));
        }
    }, [usersListAndCount]);

    return (
        <div>
            <div className='header'>
                <h1 className='result-page-title'>Github Users</h1>
                <Link to='/' className='nav-home'>Search Users</Link>
            </div>

            <div className='users-list'>
                <div>{totalCount} user results</div>
                <div className='each-user'>
                    {usersList.length > 0 ? usersList.map((userInfo) => {
                        return <EachUser key={userInfo.id} userInfo={userInfo} />;
                    }) : ''}
                </div>
            </div>

            <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
        //   onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />

        </div>
    )
}

export default SearchResults;