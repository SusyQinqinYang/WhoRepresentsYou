import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const SearchHome = () => {
    let [queryState, setQueryState] = useState('');
    let [queryRepOrSen, setQueryRepOrSen] = useState('');


    return (
        <div className='search-home'>

            <div className='title'>
                <h1 className='search-page-title'>Who Represents You</h1>
            </div>

            <form className='search-form'>
                <input
                type='text'
                placeholder="Search by user's name"
                className='search-input'
                onChange={e => setQuery(e.target.value)}
                />
            <label>
                Pick your favorite flavor:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
                <Link to={`/search/results/${query}`}>
                    <button 
                    className='btn-search'
                    onClick={(e) => {fetchUsersList(query)}
                    }>
                    Search
                    </button>
                </Link>
            </form>

        </div>
    )
}

export default SearchHome;