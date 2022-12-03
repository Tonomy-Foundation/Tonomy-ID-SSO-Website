// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { randomBytes } from 'crypto';
import { Bytes, KeyType, PrivateKey } from '@greymass/eosio';

function App() {
    useEffect(() => {
        const bytes = randomBytes(32);
        const privateKey = new PrivateKey(KeyType.K1, new Bytes(bytes));
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
