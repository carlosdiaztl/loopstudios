import React, { Component } from 'react';
import Footer from '../app/footer/footer';
import Main from './main/Main.jsx';
import Header from './hedear/Header.jsx';

class App extends Component {

    render() {
        return (
            <>
                <Header/>
                <Main />
                <Footer />
            </>

        )
    }
}

export default App;