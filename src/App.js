import React, {Component} from 'react';
import './App.scss';
import Header from "./components/Header/Header.view";
import Routes from "./pages/Routes/Routes";
import {observer, inject} from "mobx-react";

@inject("MainStore")
@observer
class App extends Component {
    render() {
        // const mainStore = this.props.MainStore;
        return (
            <div className="App">
                <Header />
                <Routes />
            </div>
        );
    }
}

export default App;
