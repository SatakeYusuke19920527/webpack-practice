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
            }
        ]
    },
    devServer: {
        contentBase: outputPath,
    },
};