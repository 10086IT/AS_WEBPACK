const path = require('path');
const CSSTest = /\.css$/i;
const ImageTest = /\.(png|svg|jpg|jpeg|gif)$/i;
const fontTest = /\.(woff|woff2|eot|ttf|otf)$/i;
const XmlTest = /\.xml$/i;
const CsvAndTsvTest = /\.(csv|tsv)$/i;
const TomlTest =/\.toml$/i;
const YamlTest =/\.yaml$/i;
const Json5Test = /\.json5$/i;
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
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
                use: ['style-loader', 'css-loader']
            },
            {
                test: ImageTest,
                type: 'asset/resource'
            },
            {
                test: fontTest,
                type: 'asset/resource'
            },
            {
                test: CsvAndTsvTest,
                use: ['csv-loader'],
            },
            {
                test: XmlTest,
                use: ['xml-loader'],
            },
            {
                test:TomlTest ,
                type: 'json',
                parser: {
                    parse: toml.parse,
                },
            },
            {
                test: YamlTest,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test:Json5Test ,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ]
    }
};
