require("dotenv").config();

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//빌드 시 CSS를 별도로 추출해 HTML DOM 추출 과정에서 JS를 불러오는 과정을 최소화 시켜주는 효과가 있다 칸다
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3000;

module.exports = {
  mode: isProd ? "production" : "development",
  devtool: isProd ? "hidden-source-map" : "source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "/build")
  },
  resolve: {
    modules: ["node_modules"],
    //import시 파일 확장명 작성 안해도 됨
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    preferRelative: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: 'public/icon.png',
      hash: true
    }),
    new MiniCssExtractPlugin({
      linkType: false, // 기본 값 'text/css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        options: {
          transpileOnly: isProd ? false : true
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(webp|png|svg|jpg|jpeg|gif|ico)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  stats: "errors-only",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public")
    },
    port: PORT,
    open: true,
    client: {
      overlay: true
    },
    hot: true,
    host: "localhost",
    historyApiFallback: true,
    compress: true
  }
};
