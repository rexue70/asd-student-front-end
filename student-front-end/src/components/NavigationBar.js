import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
} from 'react-router-dom';
import Profile from "./profile/Profile";
import Academic from "./academic/Academic";
import Resources from "./resources/Resources";
import Home from "./home/Home";
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';


class NavigationBar extends Component {
//broswer router

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            activeKey: null,
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
                            <Nav activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
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