const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.get('/healthcheck', (req, res) => {
    res.send('ok');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const rootPath = path.resolve(__dirname, './../../') + '/';
const publicPath = rootPath.concat('public/');

const paths = [
    { path: publicPath.concat('asset/'), public: '/asset' },
    { path: publicPath.concat('main/'), public: '/' },
    { path: publicPath.concat('nav/'), public: '/nav' },
];

const indexFile = publicPath.concat('main/index.html');
const indexContent = fs.readFileSync(indexFile, 'utf8');

app.get(/\w+$/, (req, res, next) => {
    const { originalUrl = '' } = req;
    if (!originalUrl.includes('.')) {
        res.send(indexContent);
    }
    next();
});

paths.forEach(({ path, public }) => {
    app.use(public, express.static(path));
});
