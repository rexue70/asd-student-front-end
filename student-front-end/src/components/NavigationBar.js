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
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';


class NavigationBar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            activeKey: 1,
        };
    }


    handleSelect(selectedKey) {
        console.log("this is", selectedKey);
        this.setState({activeKey: selectedKey});
    }

    render() {
        return (
            <Router>


                <div id="main-nav">
                    <Navbar collapseOnSelect className="navbar-trans">
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">Northeastern University</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                                <NavItem eventKey={1} href="/">
                                    Home
                                </NavItem>
                                <NavItem eventKey={2} href="/profile">
                                    Profile
                                </NavItem>
                                <NavItem eventKey={3} href="/academic">
                                    Academic
                                </NavItem>
                                <NavItem eventKey={4} href="/resources">
                                    Resources
                                </NavItem>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>


                    {/*<ul className="nav-row">*/}
                    {/*<li><Link to="/profile" className="nav-text">Profile</Link></li>*/}
                    {/*<li><Link to="/academic" className="nav-text">Academic</Link></li>*/}
                    {/*<li><Link to="/resources" className="nav-text">Resources</Link></li>*/}
                    {/*<li><Link to="/" className="nav-text">Home</Link></li>*/}
                    {/*</ul>*/}
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