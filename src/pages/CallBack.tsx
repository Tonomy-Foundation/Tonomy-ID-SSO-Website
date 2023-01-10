import React, { useEffect, useState } from 'react';

import { TP } from '../components/THeadings';
import TProgressCircle from '../components/TProgressCircle';
import { SdkErrors, throwError, UserApps } from 'tonomy-id-sdk';
import './main.css';

export default function CallBackPage() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const requests = params.get('requests');

        if (!requests) throwError("requests parameter doesn't exists", SdkErrors.MissingParams);
        const username = params.get('username');
        if (!username) throwError("username parameter doesn't exists", SdkErrors.MissingParams);
        const accountName = params.get('accountName');
        if (!accountName) throwError("accountName parameter doesn't exists", SdkErrors.MissingParams);
        verifyRequests(requests, username, accountName);
    }, []);

    async function verifyRequests(requests: string, username: string, accountName: string) {
        const result = await UserApps.verifyRequests(requests);

        const redirectJwt = result.find((jwtVerified) => jwtVerified.payload.origin !== location.origin);
        const ssoJwt = result.find((jwtVerified) => jwtVerified.payload.origin === location.origin);
        if (!redirectJwt) {
            throwError('missing jwt', SdkErrors.JwtNotValid);
        }
        if (ssoJwt) {
            try {
                const verifiedLoginSso = await UserApps.verifyPrivateKey(accountName);
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
                `?username=${username}&accountName=${accountName}&request=` +
                redirectJwt.jwt
        );
    }

    return (
        <div className="center">
            <TProgressCircle />
        </div>
    );
}
