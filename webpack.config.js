const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },

    entry: './src/index.jsx',

    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: { lessOptions: { javascriptEnabled: true } }
                    }
                ]
            },
            { test: /\.jsx$/, use: 'babel-loader', exclude: [/node_modules/] }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[id].[contenthash:8].css'
        })
    ]
};
