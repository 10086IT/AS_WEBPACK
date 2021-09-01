const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    devServer: {
        static: './dist',
        hot:true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'development',
        }),
    ],
    devtool: 'inline-source-map',//不能用于生产环境，会出事
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
};
