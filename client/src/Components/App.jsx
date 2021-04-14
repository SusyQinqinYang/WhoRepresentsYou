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
    const fetchRepOrSenList = (queryState, queryRepOrSen) => {
        if (queryRepOrSen === 'rep') {
            axios({
                method: 'get',
                url: `http://whoismyrepresentative.com/getall_reps_bystate.php?state=${queryState}&output=json`,
                headers: { 
                    'Access-Control-Allow-Origin' : '*',
                    // 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Content-Type': 'application/json'
                  }
            })
            .then( ({ data }) => {
                console.log('data',data)
                setReps(data)
            })
            .catch( (err) => {
                console.log('Get reps list API request err:', err)
            })
        } 
      }

    return (
        <Router >
            <div>
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
                        <Route path="/representatives/:state" component={SearchResults} />
                    </Switch>
                </div>

            </div>
        </Router>
    )
};

export default App;