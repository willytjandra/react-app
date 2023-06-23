const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function (env, args) {
  const isProduction = args.mode === 'production'
  // const isDevelopment = !isProduction

  return {
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash:8].js',
      clean: true,
    },
    devServer: {
      port: 3000,
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          exclude: /node_modules/,
          type: 'asset',
          generator: {
            filename: 'static/images/[name].[contenthash:8][ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'React App - Local',
        template: path.resolve(__dirname, '/public/index.html'),
        inject: 'body',
      }),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
        }),
    ],
  }
}
