const path = require('path');

const rootPath = path.resolve(__dirname, './../') + '/';

const publicPath = rootPath.concat('public/');

const srcPath = rootPath.concat('src/');
const mainPath = srcPath.concat('main/');
const navPath = srcPath.concat('nav/');

module.exports = {
    entry: {
        main: `${mainPath}index.jsx`,
        nav: `${navPath}index.jsx`,
    },
    output: {
        filename: '[name].js',
        path: publicPath,
        // publicPath: '/',
    },
    devServer: {
        bonjour: true,
        compress: true,
        contentBase: publicPath,
        host: '0.0.0.0',
        hot: true,
        inline: true,
        port: 3000,
    },
    devtool: 'source-map',

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|gif|png|mp3|svg|txt)$/,
                use: ['file-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json'],
        modules: [mainPath, navPath, 'node_modules'],
        alias: {
            '@mainCore': mainPath.concat('core/'),
            '@mainPage': mainPath.concat('page/'),
        },
    },
};
