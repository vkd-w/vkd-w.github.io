const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.tsx',
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "production.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3100
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ]
}
