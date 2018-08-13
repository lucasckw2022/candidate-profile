const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "index.html"
});

module.exports = {
  entry: "./src/index.js",
  output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [ 
            {
            loader: "style-loader" // creates style nodes from JS strings
            },
            {
            loader: "css-loader" // translates CSS into CommonJS
            }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
            {
                loader: 'url-loader'
            },
        ]
      },
    ]
  },
  plugins: [htmlWebpackPlugin]
};