const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            assert: require.resolve("assert/"),
            buffer: require.resolve("buffer/"),
            crypto: require.resolve("crypto-browserify"),
            http: require.resolve("stream-http"),
            path: require.resolve("path-browserify"),
            stream: require.resolve("stream-browserify"),
            util: require.resolve("util/"),
            zlib: require.resolve("browserify-zlib")
        },
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    target: 'async-node'
}
