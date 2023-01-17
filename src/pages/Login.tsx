import React, { useEffect, useState } from 'react';
import { UserApps, setSettings, User, KeyManager } from 'tonomy-id-sdk';
import QRCode from 'react-qr-code';
import { TH1, TP } from '../components/THeadings';
import TImage from '../components/TImage';
import TProgressCircle from '../components/TProgressCircle';
import settings from '../settings';
import { isMobile } from '../utills/IsMobile';
import { JsKeyManager } from 'tonomy-id-sdk/test/services/jskeymanager';

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

function Login() {
    const [showQR, setShowQR] = useState<string>();
    async function sendRequestToMobile(jwtRequests: string[], channel = 'mobile') {
        if (isMobile()) {
            const requests = JSON.stringify(jwtRequests);
            window.location.replace(`${settings.config.tonomyIdLink}?requests=${requests}`);

            // TODO
            // wait 1-2 seconds
            // if this code runs then the link didnt work
        } else {
            setShowQR(JSON.stringify({ text: 'hello-world' }));
            // Use communication microservice to send request to mobile
            // alert('Run on browser to test');
        }
    }

    async function handleRequests() {
        let verifiedJwt;
        try {
            verifiedJwt = await UserApps.onRedirectLogin();
        } catch (e) {
            alert(e);
            // TODO handle error

            return;
        }
        const jskeyManager: KeyManager = new JsKeyManager() as unknown as KeyManager;
        const tonomyJwt = (await UserApps.onPressLogin(
            { callbackPath: '/callback', redirect: false },
            jskeyManager
        )) as string;

        sendRequestToMobile([verifiedJwt.jwt, tonomyJwt]);

        //TODO: change the qr to only one when user is loggedin
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
    function renderQROrLoading() {
        if (!isMobile()) {
            return (
                <>
                    <TP>Scan the QR code with the Tonomy ID app</TP>
                    {!showQR && <TProgressCircle />}
                    {showQR && <QRCode value={showQR}></QRCode>}
                </>
            );
        } else {
            return (
                <>
                    <TP>Loading QR code request</TP>
                    <TProgressCircle />
                </>
            );
        }
    }

    useEffect(() => {
        // console.log();
        handleRequests();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={styles.container}>
            <TImage height={62} src={require('../assets/tonomy/tonomy-logo1024.png')} alt="Tonomy Logo" />
            <TH1>{settings.config.appName}</TH1>
            {renderQROrLoading()}
        </div>
    ) as any;
}

export default Login as any;
