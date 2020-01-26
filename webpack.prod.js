const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const sourceMap = false
const localIdentName = '[hash:base64]'

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        sourceMap,
                        localIdentName,
                        camelCase: true,
                        modules: true,
                    }
                },
                "sass-loader"
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/css','dist/js']),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]
});
