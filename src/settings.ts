const env = process.env.NODE_ENV || 'development';
console.log(`NODE_ENV=${env}`);

type ConfigType = {
    blockchainUrl: string;
    theme: {
        primaryColor: string;
        secondaryColor: string;
        tertiaryColor: string;
    };
    appName: string;
    ecosystemName: string;
    appSlogan: string;
    images: {
        logo48: string;
        logo1024: string;
    };
    ssoWebsiteOrigin: string;
};

type SettingsType = {
    env: string;
    config: ConfigType;
    isProduction: () => boolean;
};

let config: ConfigType;
const settings: SettingsType = {
    env,
    isProduction: () => settings.env === 'production',
} as SettingsType;

switch (env) {
    case 'test':
    case 'local':
    case 'development':
        config = require('./config/config.json');
        break;
    case 'staging':
        config = require('./config/config.staging.json');
        break;
    case 'production':
        config = require('./config/config.json');
        // TODO add production config when ready
        break;
    default:
        throw new Error('Unknown environment: ' + env);
}

if (process.env.SSO_WEBSITE_ORIGIN) {
    console.log(`Using SSO_WEBSITE_ORIGIN from env:  ${process.env.SSO_WEBSITE_ORIGIN}`);
    config.ssoWebsiteOrigin = process.env.SSO_WEBSITE_ORIGIN;
}

settings.config = config;

export default settings;
