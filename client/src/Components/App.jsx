import React from "react";
import SearchHome from './SearchHome.jsx';
import SearchResults from './SearchResults.jsx';
import {
    // HashRouter as Router,
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

const App = (props) => {
    return (
        <Router >
            <div>
                <div className='home-page-bdy'>
                    <Switch>
                        <Redirect 
                        exact from="/"
                        to="/search"/>
                        <Route exact path='/search' component={SearchHome}/>
                        <Route path="/search/results/:RepOrSenatorInState" component={SearchResults} />
                    </Switch>
                </div>

            </div>
        </Router>
    )
};

export default App;