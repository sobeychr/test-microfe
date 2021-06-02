const {
    configs,
    mapContentBase,
    paths: { publicPath, srcPath },
} = require('./common/index');

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
    ...configs,

    entry: {
        main: `${mainPath}index.jsx`,
    },
    devServer: {
        ...configs.devServer,
        ...mapContentBase(contentFolders),
        port: 3000,
    },
    output: {
        filename: 'main.bundle.js',
        path: publicMainPath,
    },
    resolve: {
        ...configs.resolve,
        modules: [commonPath, mainPath, 'node_modules'],
        alias: {
            '@common': commonPath,

            '@component': mainPath.concat('component/'),
            '@core': mainPath.concat('core/'),
            '@page': mainPath.concat('page/'),
        },
    },
};
