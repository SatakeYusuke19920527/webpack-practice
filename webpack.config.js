const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: outputPath,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|gif|svg|ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 2048,
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
        })
    ]
};
