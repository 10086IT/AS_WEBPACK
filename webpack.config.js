const path = require('path');
const CSSTest = /\.css$/i;
const ImageTest = /\.(png|svg|jpg|jpeg|gif)$/i ;
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: CSSTest,
                use: ['style-loader','css-loader']
            },
            {
                test:ImageTest,
                type: 'asset/resource'
            }
        ]
    }
};
