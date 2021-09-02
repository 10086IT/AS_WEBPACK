const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WerbpackFileName = (e) => {
  return `${e.chunk.name}.js`
}
module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
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
  optimization: {
    runtimeChunk: 'single',//生成runtime.js
  },
};
