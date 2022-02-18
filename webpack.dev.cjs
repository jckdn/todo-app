const { merge } = require('webpack-merge');
const common = require('./webpack.common.cjs');

process.env.NODE_ENV = 'development';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
});
