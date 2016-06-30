import path from 'path';

module.exports = {
    entry: {
        preload: './target/main.js',
        index: './target/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '../dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    }
};
