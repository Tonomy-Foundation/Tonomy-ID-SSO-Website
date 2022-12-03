import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Bytes, KeyType, PrivateKey } from '@greymass/eosio';
import { App as APP } from 'tonomy-id-sdk';
function App() {
    useEffect(() => {
        APP.onPressLogin(window).then((result) => console.log(result));
    });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
