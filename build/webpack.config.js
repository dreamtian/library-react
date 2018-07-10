// This config is for building dist files
const getWebpackConfig = require('./lib/getWebpackConfig');
const webpackConfig = getWebpackConfig(false);
if (process.env.RUN_ENV === 'PRODUCTION') {
  webpackConfig.forEach((config) => {
    webpackConfig.output.filename = '[name].js';
  });
}

module.exports = webpackConfig;
