import React, { useEffect } from 'react';
import { App as TonomyApp, JWTLoginPayload } from 'tonomy-id-sdk';
import { TH1, TP } from '../components/THeadings';
import TImage from '../components/TImage';

function Home() {
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
        console.log(verifiedJwt);
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
        <div>
            <TImage src="../assets/tonomy-logo1024.png" alt="Tonomy Logo" />
            <TH1>Tonomy</TH1>
            <TP>Loading QR code request</TP>
        </div>
    );
}

export default Home;
