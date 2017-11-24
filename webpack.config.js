const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const tsLoader = process.env.useBabel ? 'babel-loader' : 'awesome-typescript-loader'

module.exports = {
    entry: {
        index: 'index',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[hash].js',
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: tsLoader
            }, {
                test: /\.css/,
                loader: 'style-loader!css-loader',
            }, {
                loader: 'file-loader',
                test: /\.(png|jpg|gif|webp|eot|ttf|cur|woff2?|svg)$/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'title',
            template: 'src/index.html',
        }),
    ],
}
