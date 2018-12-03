const common = require('./webpack.common.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
            }
        }, {
            test: /\.scss$/,
            use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
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
})