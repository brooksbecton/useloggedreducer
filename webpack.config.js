const path = require("path");

module.exports = {
  entry: ["./src/useLoggedReducer.ts"],
  externals : "react",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "useloggedreducer.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
  },
};
