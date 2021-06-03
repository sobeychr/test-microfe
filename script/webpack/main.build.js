const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const {
    configs,
    mapContentBase,
    paths: { publicPath, srcPath },
} = require('./common/index');
const mainConfigs = require('./main.js');

const publicAssetPath = publicPath.concat('asset/');
const publicMainPath = publicPath.concat('main/');
const publicNavPath = publicPath.concat('nav/');

const commonPath = srcPath.concat('common/');
const mainPath = srcPath.concat('main/');

const contentFolders = [
    { path: publicAssetPath, public: '/asset' },
    { path: publicMainPath, public: '/' },
    { path: publicNavPath, public: '/nav' },
];

module.exports = {
    ...mainConfigs,

    output: {
        ...mainConfigs.output,
        filename: 'main.bundle.js',
        sourceMapFilename: 'main.bundle.js.map',

        hashDigestLength: 7,
        publicPath: '',
    },
};
