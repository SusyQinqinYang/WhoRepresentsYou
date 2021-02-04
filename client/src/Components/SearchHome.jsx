import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const SearchHome = ( { fetchUsersList }) => {
    let [query, setQuery] = useState('');

    return (
        <div className='search-home'>

            <div className='title'>
                <h1 className='search-page-title'>Github Search</h1>
            </div>
            
            <form className='search-form'>
                <input
                type='text'
                placeholder="Search by user's name"
                className='search-input'
                onChange={e => setQuery(e.target.value)}
                />

                <Link to={`/search/results/${query}`}>
                    <button 
                    className='btn-search'
                    onClick={(e) => {
                        // e.preventDefault();
                        fetchUsersList(query)
                        }
                    }
                    >
                    Search
                    </button>
                </Link>
            </form>

            {/* <div>
                {userList[0].avatar_url}
            </div> */}
        </div>
    )
}

export default SearchHome;