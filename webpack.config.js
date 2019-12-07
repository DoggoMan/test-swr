"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const config = {
    entry: './src/client/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        path: path_1.join(__dirname, 'src/client-build'),
        filename: '[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'eslint-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: 'tsconfig.client.json',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000',
            },
            {
                test: /.(png|jp(e*)g|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            name: 'img/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        mergeDuplicateChunks: true,
        removeAvailableModules: true,
        minimize: true,
        removeEmptyChunks: true,
        splitChunks: {
            chunks: 'all',
        },
        usedExports: true,
        sideEffects: false,
    },
    plugins: [
        new html_webpack_plugin_1.default({
            template: './src/client/index.html',
            hash: true,
        }),
    ],
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                secure: false,
            },
        },
        port: 3000,
    }
};
exports.default = config;
//# sourceMappingURL=webpack.config.js.map