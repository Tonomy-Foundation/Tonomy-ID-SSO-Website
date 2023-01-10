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
        if (!redirectJwt) {
            throwError('missing jwt', SdkErrors.JwtNotValid);
        }
        const redirectJwtPayload = redirectJwt.payload;
        location.replace(
            redirectJwtPayload.origin +
                redirectJwtPayload.callbackPath +
                `?username=${username}&accoutName=${accountName}`
        );
    }

    return (
        <div className="center">
            <TProgressCircle />
        </div>
    );
}
