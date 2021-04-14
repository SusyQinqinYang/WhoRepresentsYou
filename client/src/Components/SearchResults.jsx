import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import EachUser from './EachUser.jsx';
import ReactPaginate from 'react-paginate';

// const SearchResults = ({ usersQueryAndListAndCount, fetchUsersList }) => {
//     const { usersList, totalCount, query } = usersQueryAndListAndCount;
//     const [pageCount, setPageCount] = useState(0);
//     const [pageNumber, setPageNumber] = useState(1);

//     useEffect(() => {
//         if (totalCount > 0) {
//             setPageCount(Math.ceil(totalCount / 10));
//         }
//     }, [usersQueryAndListAndCount]);

//     useEffect(()=> {
//             fetchUsersList(query, pageNumber)
//     },[pageNumber])
//     const handlePageClick = (selectedPageNum) => {
//         setPageNumber(selectedPageNum.selected + 1);
//     };

//     return (
//         <div>
//             <div className='result-header'>
//                 <h3 className='result-page-title'>Github Users</h3>
//                 <Link to='/' className='nav-home'>Search Users</Link>
//             </div>

//             <div className='users-list' style={{textAlign: 'center'}}>
//                 <div style={{fontSize: 30}}>{totalCount} user results</div>
//                 <div className='each-user'>
//                     {usersList.length > 0 ? usersList.map((userInfo) => {
//                         return <EachUser key={userInfo.id} userInfo={userInfo} />;
//                     }) : ''}
//                 </div>
//             </div>

//             <div className='react-paginate'>
//                 <ReactPaginate
//                     previousLabel={'previous'}
//                     nextLabel={'next'}
//                     breakLabel={'...'}
//                     breakClassName={'break-me'}
//                     pageCount={pageCount}
//                     marginPagesDisplayed={2}
//                     pageRangeDisplayed={5}
//                     onPageChange={handlePageClick}
//                     containerClassName={'pagination'}
//                     subContainerClassName={'pages pagination'}
//                     activeClassName={'active'}
//                 />
//             </div>

//         </div>
//     )
// }

const SearchResults = () => {

    return (
        <div>
        haha
        </div>
    )
}

export default SearchResults;