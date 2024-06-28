const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "webpackbuild.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".less"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(jpg|png|svg|gif|webp)$/,
        type: "asset/resource"
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "output")
    },
    port: 3000,
    historyApiFallback: true
  },
  devtool: "inline-source-map"
};
