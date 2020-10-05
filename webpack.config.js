const path = require('path');
const outputPath = path.resolve(__dirname, 'dist')
console.log(outputPath, 'outputPath')
module.exports = {
    entry: './src/index.js',
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|gif|svg|ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: "./images/[name].[ext]"
                }
            },
        ]
    },
    devServer: {
        contentBase: outputPath,
    },
};