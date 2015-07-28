module.exports = {
    entry: "./src/index.jsx",
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
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
