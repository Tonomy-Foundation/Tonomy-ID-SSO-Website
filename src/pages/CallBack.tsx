import React, { useEffect, useState } from 'react';

import { TP } from '../components/THeadings';
import TProgressCircle from '../components/TProgressCircle';
import { UserApps } from 'tonomy-id-sdk';
import './main.css';

export default function CallBackPage() {
    useEffect(() => {
        verifyRequests;
    }, []);

    async function verifyRequests() {
        const { result, accountName, username } = await UserApps.onAppRedirectVerifyRequests();

        const redirectJwt = result.find((jwtVerified) => jwtVerified.payload.origin !== location.origin);
        const ssoJwt = result.find((jwtVerified) => jwtVerified.payload.origin === location.origin);
        if (!redirectJwt) {
            throw new Error("JWT isn't correct");
            //TODO: handle this here
        }
        if (ssoJwt) {
            try {
                const verifiedLoginSso = await UserApps.verifyKeyExistsForApp(accountName);
                if (verifiedLoginSso) localStorage.setItem('loggedIn', 'true');
            } catch (e) {
                // TODO only catch the 404 error and show nothing
                console.log(e);
            }
        }

        const redirectJwtPayload = redirectJwt.payload;
        location.replace(
            redirectJwtPayload.origin +
                redirectJwtPayload.callbackPath +
                `?username=${username}&accountName=${accountName}&requests=` +
                redirectJwt.jwt
        );
    }

    return (
        <div className="center">
            <TProgressCircle />
        </div>
    );
}
