const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
            }
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
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
    },
    
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
})