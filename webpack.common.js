const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
        new CleanWebpackPlugin(['./dist']),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            filename: './index.html'
        })
    ]

}