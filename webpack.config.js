// var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(__dirname)
module.exports = {
    context: path.join(__dirname, 'src'),
    devtool: 'cheap-eval-source-map',
    entry: [
        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/dev-server',
        './index.js'
    ],
    module: {
        preLoaders: [{
            test: /\.tag$/,
            exclude: /node_modules/,
            loader: 'riot-tag-loader',
            query: {
                type: 'none'
            }
        }],
        loaders: [{
            test: /\.js$|\.tag$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                compact: false,
                presets: ['es2015-riot'],
                plugins: ['external-helpers-2'],
            }
        }, {
            test: /\.html$/,
            loader: "raw-loader"
        }, {
            test: /\.less$|\.css/,
            loader: 'style-loader!css-loader!less-loader' // compiles Less to CSS'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    },
    output: {
        path: __dirname + "/src/",
        filename: "client.min.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
    ],
};