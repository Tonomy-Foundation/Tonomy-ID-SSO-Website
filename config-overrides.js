const webpack = require('webpack');
const { aliasDangerous } = require('react-app-rewire-alias/lib/aliasDangerous');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    const fallback = config.resolve.fallback || {};

    Object.assign(fallback, {
        crypto: require.resolve('crypto-browserify'),
    });

    config.resolve.fallback = fallback;

    // REACT_ APP_ NODE_ ENV is set in Tonomy-Integration/scripts/helpers.sh
    if (process.env.REACT_APP_NODE_ENV === 'local') {
        // https://github.com/risenforces/craco-alias/issues/24#issuecomment-801176626
        console.log('Local environment detected, using local Tonomy-ID-SDK');

        const aliasConfigModifier = aliasDangerous({
            'tonomy-id-sdk': __dirname + '/../Tonomy-ID-SDK',
        });

        aliasConfigModifier(config);
    }

    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ];

    return config;
};
