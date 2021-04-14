import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const SearchHome = ({ fetchRepOrSenList }) => {

    

    let [queryState, setQueryState] = useState('AL');
    let [queryRepOrSen, setQueryRepOrSen] = useState('rep');
// console.log('queryState', queryState);
// console.log('props', props)
// console.log('fetchRepOrSenList', fetchRepOrSenList)


    return (
        <div className='search-home'>

            <div className='title'>
                <h1 className='search-page-title'>Who Represents You</h1>
            </div>

            <form className='search-form'>
                {/* <input
                type='text'
                placeholder="Search by user's name"
                className='search-input'
                onChange={e => setQuery(e.target.value)}
                /> */}
                <label style={{display: "block"}}>
                    <span style={{podding: 30}}>Pick your state: </span>
                    <select value={queryState} onChange={e => setQueryState(e.target.value)}>
                        <option value={'AL'}>Alabama</option>
                        <option value={'AK'}>Alaska</option> 
                        <option value={'AZ'}>Arizona</option>
                        <option value={'AR'}>Arkansas</option>
                        <option value={'CA'}>California</option>
                        <option value={'CO'}>Colorado </option>
                        <option value={'CT'}>Connecticut </option>
                        <option value={'DE'}>Delaware</option>
                        <option value={'FL'}>Florida </option>
                        <option value={'GA'}>Georgia </option>
                        <option value={'HI'}>Hawaii </option>
                        <option value={'ID'}>Idaho</option>
                        <option value={'IL'}>Illinois</option>
                        <option value={'IN'}>Indiana </option>
                        <option value={'IA'}>Iowa </option>
                        <option value={'KS'}>Kansas </option>
                        <option value={'KY'}>Kentucky</option>
                        <option value={'LA'}>Louisiana </option>
                        <option value={'ME'}>Maine </option>
                        <option value={'MD'}>Maryland </option>
                        <option value={'MA'}>Massachusetts</option>
                        <option value={'MI'}>Michigan </option>
                        <option value={'MN'}>Minnesota </option>
                        <option value={'MS'}>Mississippi </option>
                        <option value={'MO'}>Missouri</option>
                        <option value={'MT'}>Montana </option>
                        <option value={'NE'}>Nebraska </option>
                        <option value={'NV'}>Nevada </option>
                        <option value={'NH'}>New Hampshire</option>
                        <option value={'NJ'}>New Jersey</option>
                        <option value={'NM'}>New Mexico</option>
                        <option value={'NY'}>New York</option>
                        <option value={'NC'}>North Carolina</option>
                        <option value={'ND'}>North Dakota</option>
                        <option value={'OH'}>Ohio </option>
                        <option value={'OK'}>Oklahoma </option>
                        <option value={'OR'}>Oregon </option>
                        <option value={'PA'}>Pennsylvania </option>
                        <option value={'RI'}>Rhode Island</option>
                        <option value={'SC'}>South Carolina</option>
                        <option value={'SD'}>South Dakota</option>
                        <option value={'TN'}>Tennessee </option>
                        <option value={'TX'}>Texas </option>
                        <option value={'UT'}>Utah </option>
                        <option value={'VT'}>Vermont </option>
                        <option value={'VA'}>Virginia </option>
                        <option value={'WA'}>Washington </option>
                        <option value={'WV'}>West Virginia</option>
                        <option value={'WI'}>Wisconsin </option>
                        <option value={'WY'}>Wyoming </option>
                    </select>
                </label>
                <label style={{display: "block"}}>
                    <span style={{podding: 30}}>Pick your state: </span>
                    <select value={queryRepOrSen} onChange={e => setQueryRepOrSen(e.target.value)}>
                        <option value={'rep'}>representatives</option>
                        <option value={'sen'}>senators</option> 
                    </select>
                </label>
                <Link to={`/search/results/${queryState}${queryRepOrSen}`}>
                    <button 
                    className='btn-search'
                    onClick={(e) => {fetchRepOrSenList(queryState, queryRepOrSen)}
                    }>
                    Search
                    </button>
                </Link>
            </form>

        </div>
    )
}

export default SearchHome;