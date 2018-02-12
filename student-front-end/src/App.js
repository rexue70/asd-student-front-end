import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Academic from './components/academic/Academic';
import Coop from './components/coop/Coop';
import Resources from './components/resources/Resources';
import Header from './components/header';


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Router>
                    <div id="main-nav">
                        <ul className="nav-row">
                            <li><Link to="/profile" className="nav-text">Profile</Link></li>
                            <li><Link to="/academic" className="nav-text">Academic</Link></li>
                            <li><Link to="/resources" className="nav-text">Resources</Link></li>
                            <li><Link to="/coop" className="nav-text">COOP</Link></li>
                            <li><Link to="/" className="nav-text">Home</Link></li>
                        </ul>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route path="/academic" component={Academic}/>
                        <Route path="/coop" component={Coop}/>
                        <Route path="/resources" component={Resources}/>

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
