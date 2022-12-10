const webpack = require('webpack');
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        crypto: require.resolve('crypto-browserify'),
    });
    config.resolve.fallback = fallback;
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ];

    return config;
};
