import path from 'path';

module.exports = {
    entry: {
        app: './js/target/app.js'
    },
    output: {
        path: path.join(__dirname, 'js/dist'),
        publicPath: '../js/dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    }
};
