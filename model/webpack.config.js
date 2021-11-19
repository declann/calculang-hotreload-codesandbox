const path = require('path');

const entrypoint = './base.cul.js';

module.exports = {
  entry: entrypoint,

  devtool: 'source-map',
  output: {
    filename: path.basename(entrypoint, '.cul.js') + '.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    // devtoolModuleFilenameTemplate ?
  },
  optimization: {
    minimize: false,
    concatenateModules: false, // because leaks absolute paths?
  },
  module: {
    rules: [
      {
        test: /\.cul/,
        use: {
          loader: '@calculang/calculang-transform-loader/index.js',
          options: {}, // needs introspection info for the root to go in, this is bad form, not getting away from using API till I fix => postpone
        },
      },
    ],
  },
};
