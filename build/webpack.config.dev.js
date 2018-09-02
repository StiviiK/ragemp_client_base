const path = require("path");

module.exports = {
    devtool: 'source-map',
    entry: {
        "rageclient.min": "./src/main.ts",
    },
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "[name].js",
        sourceMapFilename: '[name].map'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [ ],
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};
