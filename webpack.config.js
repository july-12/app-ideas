const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },

    entry: './src/index.tsx',

    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(css|less)$/,
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
            { test: /\.(js|jsx|ts|tsx)$/, use: 'babel-loader', exclude: [/node_modules/] }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[id].[contenthash:8].css'
        })
    ]
};
