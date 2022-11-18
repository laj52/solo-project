const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV, //dev or prod
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: 'Development',
            template: '/src/index.html'
        })
    ],

    devServer: {
        host: 'localhost',
        port: 8080,
        static: {
            directory: path.join(__dirname, 'build'),
            publicPath: '/'
        },
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }

}