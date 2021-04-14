import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import EachRepsOrSen from './EachRepsOrSen.jsx';

const SearchResults = ({ reps, sens, repFlag }) => {
    console.log('reps, sens, repFlag', reps, sens, repFlag)
    let [repsOrSenInfo, setRepsOrSenInfo] = useState('');
    useEffect(() => {
        if (repFlag === true) {
            setRepsOrSenInfo(reps);
        } else {
            setRepsOrSenInfo(sens);
        }
    }, [reps, sens]);

    return (
        <div>
            <div className='result-header'>
                <h3 className='result-page-title'>Who Represents You</h3>
                <Link to='/' className='nav-home'>Back To Search</Link>
            </div>

            <div className='repsOrSens-list' style={{textAlign: 'center'}}>
                <div style={{fontSize: 30}}>{repFlag ? 'Representatives List' : 'Senator List'}</div>
                <div className='each-repsOrSen'>
                       {repsOrSenInfo !== '' ?  repsOrSenInfo.map((personInfo, ind) => {
                        return <EachRepsOrSen key={ind} personInfo={personInfo} />;
                    }) : 'Loading The List'}
                </div>
            </div>

        </div>
    )
}


export default SearchResults;