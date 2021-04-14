import React, {useState, useEffect} from "react";
import SearchHome from './SearchHome.jsx';
import SearchResults from './SearchResults.jsx';
import axios from 'axios';
import {
    // HashRouter as Router,
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

const App = (props) => {
    let [reps, setReps] = useState('');
    let [sens, setSens] = useState('');
    let [repFlag, setRepFlag] = useState('');

    const fetchRepOrSenList = (queryState, queryRepOrSen) => {
        if (queryRepOrSen === 'rep') {
            setRepFlag(true);
            axios({
                method: 'get',
                url: `/representatives/`,
                params: {
                    state: queryState
                }
            })
            .then( ({ data }) => {
                setReps(data.results)
            })
            .catch( (err) => {
                console.log('Get reps list API request err:', err)
            })
        } 
        if (queryRepOrSen === 'sen') {
            setRepFlag(false);
            axios({
                method: 'get',
                url: `/senators/`,
                params: {
                    state: queryState
                }
            })
            .then( ({ data }) => {
                setSens(data.results)
            })
            .catch( (err) => {
                console.log('Get sens list API request err:', err)
            })
        }
      }

    return (
        <Router >
            <div className='home-page-bdy'>
                <Switch>
                    <Redirect 
                    exact from="/"
                    to="/search"/>
                    <Route exact path='/search' 
                    render={() => (
                        <SearchHome fetchRepOrSenList = {fetchRepOrSenList} isAuthed={true}/>
                      )}
                    />
                    <Route path="/representativesOrSenators/:state" 
                    render={() => (
                        <SearchResults reps = {reps} sens = {sens} repFlag = {repFlag} isAuthed={true}/>
                    )}
                    />
                </Switch>
            </div>
        </Router>
    )
};

export default App;