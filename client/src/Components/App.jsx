import React from "react";
import SearchHome from './SearchHome.jsx';
import SearchResults from './SearchResults.jsx';
import {
    HashRouter as Router,
    // BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from 'react-router-dom';

const App = (props) => {
    return (
        <Router >
            <div>
                <div className='header'>
                    <h1 className='page-title'>Search Github Users</h1>
                    <div className='nav'>
                        <NavLink to='/' className='nav-home'>
                            Search Users
                        </NavLink>
                    </div>
                </div>

                <div className='home-page-bdy'>
                    <Switch>
                        <Redirect 
                        exact from="/"
                        to="/search"/>
                        <Route exact path='/search' component={SearchHome}/>
                        <Redirect 
                        exact from="/search/results"
                        to="/search/results/susyyang"/>
                        <Route path="/search/results/:user" component={SearchResults} />
                    </Switch>
                </div>

            </div>
        </Router>
    )
};

export default App;