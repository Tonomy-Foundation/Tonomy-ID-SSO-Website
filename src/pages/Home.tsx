import React, { useEffect, useState } from 'react';
import { App as TonomyApp, setSettings } from 'tonomy-id-sdk';
import { TH1, TP } from '../components/THeadings';
import TImage from '../components/TImage';
import TProgressCircle from '../components/TProgressCircle';
import { JWTVerified } from 'tonomy-id-sdk/node_modules/did-jwt';
import settings from '../settings';
import { isMobile } from '../utills/IsMobile';

setSettings({
    blockchainUrl: settings.config.blockchainUrl,
});

const styles = {
    container: {
        flex: 1,
        textAlign: 'center' as const,
        alignSelf: 'center',
    },
};

function Home() {
    async function sendRequestToMobile(jwtRequests: string[], channel = 'mobile') {
        if (isMobile()) {
            console.log('sendRequestToMobile', jwtRequests);
            const requests = JSON.stringify(jwtRequests);
            window.location.replace(`${settings.config.tonomyIdLink}?jwt=${requests}`);

            // TODO
            // wait 1-2 seconds
            // if this code runs then the link didnt work
        } else {
            // Use communication microservice to send request to mobile
            alert('Run on browser to test');
        }
    }

    async function handleRequests() {
        let verifiedJwt: JWTVerified;
        try {
            verifiedJwt = await TonomyApp.onRedirectLogin();
        } catch (e) {
            console.error(e);
            alert(e);
            // TODO handle error
            return;
        }

        const tonomyJwt = (await TonomyApp.onPressLogin({ callbackPath: '/callback', redirect: false })) as string;

        sendRequestToMobile([verifiedJwt.jwt, tonomyJwt]);
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

    // ensure useEffect is only called once
    const [rendered, setRendered] = useState(false);

    useEffect(() => {
        setRendered(true);
        if (!rendered) {
            handleRequests();
        }
    }, [rendered]);

    return (
        <div style={styles.container}>
            <TImage height={62} src={require('../assets/tonomy/tonomy-logo1024.png')} alt="Tonomy Logo" />
            <TH1>Tonomy</TH1>
            <TP>Loading QR code request</TP>
            <TProgressCircle />
        </div>
    ) as any;
}

export default Home as any;
