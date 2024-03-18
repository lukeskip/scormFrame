const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html', // Especifica tu archivo HTML como plantilla
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: 'audios', to: 'audios' }, // Copia la carpeta de audios de 'audios' a 'dist/audios'
            ],
        }),
       
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        
    ],
    
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Servir archivos estáticos desde la carpeta dist
        },
        compress: true, // Habilita la compresión gzip
        port: 9000, // Puerto en el que se ejecutará el servidor
    }
};