import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import academic from './components/academic/Academic';
import coop from './components/coop/Coop';
import resources from './components/resources/Resources';




class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>

                        <Link to="/">Home</Link>{' '}
                        <Link to="/profile">Student Profile</Link>{' '}
                        <Link to="/academic">Student Academic</Link>{'  '}
                        <Link to="/coop">Student COOP</Link>{'  '}
                        <Link to="/resources">Student resources</Link>{'  '}


                        <Route exact path="/" component={Home}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route path="/academic" component={academic}/>
                        <Route path="/coop" component={coop}/>
                        <Route path="/resources" component={resources}/>

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
