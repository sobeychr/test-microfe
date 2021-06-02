const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const {
    configs,
    paths: { publicPath, srcPath },
} = require('./common/index');

const publicNavPath = publicPath.concat('nav/');
const commonPath = srcPath.concat('common/');
const navPath = srcPath.concat('nav/');

module.exports = {
    ...configs,

    entry: {
        nav: `${navPath}index.jsx`,
    },
    devServer: {
        ...configs.devServer,
        contentBase: publicNavPath,
        port: 3001,
    },
    output: {
        filename: 'nav.bundle.js',
        path: publicNavPath,
    },
    plugins: [
        ...configs.plugins,
        new WebpackManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath: '',
        }),
    ],
    resolve: {
        ...configs.resolve,
        modules: [commonPath, navPath, 'node_modules'],
        alias: {
            '@common': commonPath,
        },
    },
};
