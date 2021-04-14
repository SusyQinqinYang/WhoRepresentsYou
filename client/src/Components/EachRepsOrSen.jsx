import React, { useState, useEffect }from 'react';

const EachRepsOrSen = ({ personInfo }) => {
    return (
        <div className='each-repOrSen-info flex-container'>
            <div>
                <div className='detailed-info' style={{fontSize: 20}}>
                    <a href={personInfo.link} rel="repOrSenPageLink">Name: {personInfo.name}</a>
                    <p style={{margin: 0}}>
                    {' | '}{`Party: ${personInfo.party}`}{' '}
                    {' | '}{`Phone: ${personInfo.phone}`}{' '}
                    {' | '}{`State: ${personInfo.state}`}{' | '}
                    </p>
                    <p style={{margin: 0}}> {`Office: ${personInfo.office}`} </p>
                </div>
            </div>
        </div>
    )
}
export default EachRepsOrSen;