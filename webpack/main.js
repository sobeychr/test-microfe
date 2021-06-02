const {
    configs,
    paths: { publicPath, srcPath },
} = require('./common/index');

const publicMainPath = publicPath.concat('main/');
const commonPath = srcPath.concat('common/');
const mainPath = srcPath.concat('main/');

module.exports = {
    ...configs,

    entry: {
        main: `${mainPath}index.jsx`,
    },
    devServer: {
        ...configs.devServer,
        contentBase: publicMainPath,
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
