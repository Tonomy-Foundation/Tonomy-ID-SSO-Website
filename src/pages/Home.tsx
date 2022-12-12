import { createStyles, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { App as TonomyApp, JWTLoginPayload } from 'tonomy-id-sdk';
import { TH1, TH3, TP } from '../components/THeadings';
import TImage from '../components/TImage';
import TProgressBar from '../components/TProgressBar';

const styles = {
    container: {
        flex: 1,
        // flexDirection: 'column',
        marginTop: '20%',
        // textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign: 'center',
    },
};

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
        <div style={styles.container}>
            <TImage height={62} src={require('../assets/tonomy-logo1024.png')} alt="Tonomy Logo" />
            <TH1>Tonomy</TH1>
            <TP>Loading QR code request</TP>
            <TH3>LOADING...</TH3>
            <TProgressBar value={30} />
            <TP>Please wait (30%)</TP>
        </div>
    );
}

export default Home;
