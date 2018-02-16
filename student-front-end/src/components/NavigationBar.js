import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Profile from "./profile/Profile";
import Academic from "./academic/Academic";
import Home from "./home/Home";
import Resources from "./resources/Resources";

class NavigationBar extends Component {
    render() {
        return (
            <Router>
                <div id="main-nav">
                    <ul className="nav-row">
                        <li><Link to="/profile" className="nav-text">Profile</Link></li>
                        <li><Link to="/academic" className="nav-text">Academic</Link></li>
                        <li><Link to="/resources" className="nav-text">Resources</Link></li>
                        <li><Link to="/" className="nav-text">Home</Link></li>
                    </ul>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route path="/academic" component={Academic}/>
                    <Route path="/resources" component={Resources}/>

                </div>
            </Router>
        )
    }
}

export default NavigationBar