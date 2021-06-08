const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'production',
    entry: './src/js/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/",
        filename: "js/[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                },
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: 'media/[name].[ext]',
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    // Disables attributes processing
                    sources: false,
                    minimize: true
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        }),
        /*         new BundleAnalyzerPlugin() */
    ],
};