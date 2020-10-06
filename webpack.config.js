const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: outputPath,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|gif|svg|ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: './images/[name].[ext]',
                },
            },
            {
                test: /\.(jsx?|tsx?)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            }
        ],
    },
    devServer: {
        contentBase: outputPath,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    devtool: 'eval-source-map'
};
