module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./src/index.jsx"]
  },
  output: {
    path: __dirname,
    filename: "build/bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    path: __dirname
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
