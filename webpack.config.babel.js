import path from 'path';

module.exports = {
    entry: {
        app: './target/app.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '../dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    }
};
