import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { App as APP } from 'tonomy-id-sdk';
import { mobileCheck } from './utills/IsMobile';
function App() {
    const [jwt, setJwt] = useState('');
    useEffect(() => {
        APP.onPressLogin(window).then((result) => {
            if (result) {
                setJwt(result);
            }
        });
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
                <a href={'tonomy-id://tonomy-id-website/sso-login?jwt=' + jwt}>open App</a>
            </header>
        </div>
    );
}

export default App;
