const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WerbpackFileName = (e) => {
  return `${e.chunk.name}.js`
}
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
    }),
  ],
  devtool: 'inline-source-map',//不能用于生产环境，会出事
  output: {
    filename: WerbpackFileName.bind(this),
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
