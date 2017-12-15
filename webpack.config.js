const path = require('path');

module.exports = {
    entry: "./static/app.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loade: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
}