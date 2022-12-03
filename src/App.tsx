import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Bytes, KeyType, PrivateKey } from '@greymass/eosio';

function App() {
    useEffect(() => {
        const privateKey = new PrivateKey(
            KeyType.K1,
            new Bytes(new TextEncoder().encode('12345678901234567890123456789012'))
        );
        console.log(privateKey.toPublic());
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
