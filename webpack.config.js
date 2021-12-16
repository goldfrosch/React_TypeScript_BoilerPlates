//웹팩 튜토리얼: https://webpack.js.org/configuration/mode/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); 

module.exports = {
  entry: {
    'js/app': ['./src/App.tsx'],
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },

  devServer: {
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};