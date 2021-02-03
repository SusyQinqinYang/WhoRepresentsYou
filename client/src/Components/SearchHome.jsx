import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const SearchHome = () => {
    let [query, setQuery] = useState('');
    let [userList, setUserList] = useState([{avatar_url: 'testing'}]);

    console.log('query',query);
    console.log('userList',userList);

    const fetchUsersList = (query) => {
        console.log('query is', query)
        axios({
            method: 'get',
            url: 'https://api.github.com/search/users',
            params: {
                accept: 'application/vnd.github.v3+json',
                q: query
            }
        })
        .then( ( {data}) => {
            setUserList(data.items);
            console.log('API return', data)
            console.log('API return total count', data.total_count);

        })
        .catch( (err) => {
            console.log('Get user list API request err:', err)
        })

    }

    return (
        <div className='search-home'>

            <form className='search-form'>
                <input
                type='text'
                placeholder="Search by user's name"
                className='search-input'
                onChange={e => setQuery(e.target.value)}
                />

                {/* <Link to={`/search/results/${query}`}> */}
                    <button 
                    className='btn-search'
                    onClick={(e) => {
                        e.preventDefault();
                        fetchUsersList(query)
                        }
                    }
                    >
                    Search
                    </button>
                {/* </Link> */}
            </form>

            <div>
                {userList[0].avatar_url}
            </div>
        </div>
    )
}

export default SearchHome;