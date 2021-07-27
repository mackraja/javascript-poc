const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new webpack.ids.HashedModuleIdsPlugin({
      context: __dirname,
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      inject: true
    }),
    new CopyPlugin({
      patterns: [
        { from: "service-worker.js", to: "service-worker.js" },
      ]
    })
  ],
};
