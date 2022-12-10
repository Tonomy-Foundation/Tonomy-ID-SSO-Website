import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { App as TonomyApp, JWTLoginPayload } from 'tonomy-id-sdk';

function App() {
    async function sendRequestToMobile(requests: JWTLoginPayload[], channel) {
        /*
        if (loggedIn) {
            send a new request with
            {
                verifiedJwt
            }
        } else {
            send a new request with
            {
                idTonomyJwt,
                verifiedJwt
            }
        }
        */
    }

    async function handleRequests() {
        const verifiedJwt = await TonomyApp.onRedirectLogin();
        /*
        let idTonomyJwt: string;
        const loggedIn = user logged into id.tonomy.foundation (check local storage and validate key is still authorized)
        if (loggedIn) {
            idTonomyJwt = get from local storage
        } else {
            idTonomyJwt = TonomyApp.onPressLogin();
        }

        if (mobile) {
            sendRequestToMobile([idTonomyJwt, verifiedJwt], deeplink);
        } else {
            if (loggedIn) {
                subscribe to the channel
            } else {
                create new channel by creating QR code with idTonomyJwt
            }
            sendRequestToMobile([idTonomyJwt, verifiedJwt], communication channel);
        }
        */
    }

    useEffect(() => {
        handleRequests();
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>id.tonomy.foundation (localhost:3000)</p>
            </header>
        </div>
    );
}

export default App;
