const path = require('path');
const outputPath = path.resolve(__dirname, 'dist')
console.log(outputPath, 'outputPath')
module.exports = {
    entry: './src/index.js',
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: outputPath,
    },
};