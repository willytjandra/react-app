const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:8].js',
        clean: true
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App - Local',
            template: path.resolve(__dirname, '/public/index.html'),
            inject: 'body'
        })
    ]
};