import React from 'react';
import { TA } from '../components/Tbuttons';
import { TH1, TH2, TH3, TP } from '../components/THeadings';
import TImage from '../components/TImage';
import appStoreImage from '../assets/app-store.svg';
import './new.css';

export default function New() {
    return (
        <div className="container">
            <TImage src={require('../assets/tonomy/tonomy-logo1024.png')} height={86}></TImage>
            <TH1>Tonomy ID</TH1>
            <TH3>The easiest and safest way to access Tonomy apps</TH3>
            <TP>
                Tonomy ID is a self-sovereign identity digital wallet that protects your security and privacy. &nbsp;
                <TA>Learn more</TA>
            </TP>

            <TP>
                It is open-source and maintained by the Tonomy Foundation. <TA>Learn more</TA>
            </TP>
            <div>
                <a href="#">
                    <img alt="Get it on Apple store" width="200px" src={appStoreImage} />
                </a>
            </div>

            <div>
                <a href="https://play.google.com/store/apps/details?id=foundation.tonomy.projects.tonomyidstaging&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                    <img
                        alt="Get it on Google Play"
                        width="230px"
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    />
                </a>
            </div>
            <TP>
                Already have Tonomy? <TA>Log in here</TA>
            </TP>
        </div>
    );
}
