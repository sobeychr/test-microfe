const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const {
    configs,
    paths: { publicPath, srcPath },
} = require('./common/index');
const navConfigs = require('./nav.js');

const publicNavPath = publicPath.concat('nav/');

module.exports = {
    ...navConfigs,

    output: {
        filename: 'nav.[fullhash].js',
        sourceMapFilename: 'nav.[fullhash].js.map',

        hashDigestLength: 7,
        path: publicNavPath,
        publicPath: '',
    },
    plugins: [
        ...navConfigs.plugins,
        new WebpackManifestPlugin({
            fileName: 'asset-manifest.json',
            filter: ({ name }) => !name.endsWith('.map'),
        }),
    ],
};
