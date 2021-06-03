const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const rootPath = path.resolve(__dirname, './../../../') + '/';

const publicPath = rootPath.concat('public/');

const srcPath = rootPath.concat('src/');
const commonPath = srcPath.concat('common/');

module.exports = {
    // easy access to directories
    paths: {
        publicPath,
        srcPath,
    },
    // eases mapping 'contentBase' & 'contentBasePublicPath' configs
    mapContentBase: (list) => {
        const contentBase = list.map(({ path }) => path);
        const contentBasePublicPath = list.map(({ public }) => public);
        return { contentBase, contentBasePublicPath };
    },
    // Webpack configs
    configs: {
        devServer: {
            bonjour: true,
            compress: true,
            historyApiFallback: true,
            host: '0.0.0.0',
            hot: true,
            inline: true,
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

        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['**/*', '!index.html'],
            }),
        ],

        resolve: {
            extensions: ['.js', '.jsx', '.scss', '.json'],
        },
    },
};
