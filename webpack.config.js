const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx", //②
  devtool: "eval-source-map", //devtoolでエラー箇所を正確に
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  }, //import export を使用可能にしてくれる。
  module: {
    rules: [
      //③
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { modules: true } },
        ],
      },
    ],
  },
  plugins: [
    //①
    new HtmlWebpackPlugin({
      //htmlファイルにscriptタグにjsファイルを指定しなくて良いための機能。distに自動的にscriptタグが生成される。
      template: "./src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
