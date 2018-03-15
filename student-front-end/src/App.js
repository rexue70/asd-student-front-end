import React, {Component} from 'react';
import Header from './components/Header';
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavigationBar/>
                <Footer/>
            </div>
        );
    }
}

export default App;
