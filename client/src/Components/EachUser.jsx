import React, { useState, useEffect }from 'react';
import axios from 'axios';

const EachUser = ({ userInfo }) => {
    let [userOtherInfo, setUserOtherInfo] = useState({});

    useEffect(() => {
        axios({
            method: 'get',
            url: userInfo.url,
            headers: {'accept': 'application/vnd.github.v3+json'}
        })
        .then( ({ data }) => {
            setUserOtherInfo(data)
        })
        .catch( (err) => {
            console.log('Get user list API request err:', err)
        })
      }, [userInfo]);

    return (
        <div className='each-user-info flex-container'>
            <div>
            <img src={userInfo.avatar_url} alt="userImg" style={{width: 100, height: 100}}/>
            <div className='detailed-info' style={{fontSize: 20}}>
                <a href={userInfo.html_url} rel="userPageLink">User: {userInfo.login}</a>
                <p style={{margin: 0}}>
                {' | '}{Object.values(userOtherInfo).length > 0 ? `Followers: ${userOtherInfo.followers}` : 'Followers: 0'}{' '}
                {' | '}{Object.values(userOtherInfo).length > 0 ? `Public repos: ${userOtherInfo.public_repos}` : 'Public repos: 0'}{' '}
                {' | '}Score: {userInfo.score}{' | '}
                </p>
                <p style={{margin: 0}}> {Object.values(userOtherInfo).length > 0 ? `Bio: ${userOtherInfo.bio}` : 'Bio: '}</p>
            </div>
            </div>

        </div>
    )
}
export default EachUser;