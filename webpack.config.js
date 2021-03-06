const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'src');
const APP_DIR = path.resolve(__dirname, 'static');

module.exports = {
    entry: BUILD_DIR + "/app.js",
    output: {
        path: APP_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "static/"),
        stats: "errors-only",
        open: true,
        compress: true,
        historyApiFallback: true
    }
}