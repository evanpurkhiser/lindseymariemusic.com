const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_PROD =
  process.argv.find(a => a.includes('mode=production')) !== undefined;

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js',
  },
  devtool: IS_PROD ? 'source-map' : 'cheap-module-eval-source-map',
  devServer: { port: 9000, hot: true },
  optimization: {
    splitChunks: { chunks: 'all' },
  },

  resolve: {
    alias: {
      app: path.resolve(__dirname, 'app/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { presets: ['env', 'stage-1', 'react'] },
      },
      {
        test: /\.(png|jpg|json|mp3)$/,
        type: 'javascript/auto',
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.svg$/,
        include: path.resolve('./app/assets'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: { spriteFilename: 'sprite.[hash].svg', esModule: false },
          },
          {
            loader: 'svgo-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
