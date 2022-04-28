const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(process.cwd(), "src", "index.tsx"),
  mode: "development",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    publicPath: '/',
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: path.resolve(process.cwd(), "node_modules"),
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgrConfig: {
                plugins: {
                  removeViewBox: false,
                }
              }
            }
          },
          "file-loader"
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(process.cwd(), 'public'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
}