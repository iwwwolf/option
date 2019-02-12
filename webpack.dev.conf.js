const merge = require('webpack-merge'),
      baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    // DEV settings gonna be here
    mode: 'development',

    devServer: {
        // historyApiFallback: true,
        // noInfo: true,
        overlay: {
            warnings: true,
            errors: true
        },
        port: 8080,
    }
});

// export devWebpackConfig
module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});