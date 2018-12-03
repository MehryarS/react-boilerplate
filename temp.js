const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: { 
        app: './src/js/index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
    },

    devServer: {
        hotOnly: true,
        compress: true,
        port: 9000,
        open: true,
        watchContentBase: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            filename: './index.html'
        }),

        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
            }
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader'
            }]
        }, {
            test: /\.html$/,
            use: [{
                loader: "html-loader"
            }]
        }]
    }
}