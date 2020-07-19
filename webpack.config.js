const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//'start': npm install -D webpack webpack-cli
module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.css']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {  //npm install -D webpack-dev-server
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({     //npm install -D html-webpack-plugin
            template: './index.html'
        }),
        new CleanWebpackPlugin(),  //npm install -D clean-webpack-plugin
        new CopyWebpackPlugin({    //npm install -D copy-webpack-plugin
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/images/hot_and_cold.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({ //npm install -D mini-css-extract-plugin
            filename: '[name].[hash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']  //npm install -D style-loader css-loader
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']  //npm install -D file-loader
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    }
}
