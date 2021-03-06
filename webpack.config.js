const path = require('path');

module.exports = {
    entry: path.join(__dirname, './client/src/index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'client/dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["css-loader", "sass-loader"],
            }
        ]
    }
}