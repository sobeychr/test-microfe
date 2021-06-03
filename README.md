# Micro Front-End test integration

## Setup

-   `yarn` or `yarn install` to install packages
-   `yarn dev` builds **Nav MicroFE** then runs the **Main** as DevMode
-   `yarn buildNav` recompiles **Nav MicroFE** into _asset-manifest.json_
-   `yarn build` builds MicroFE and Main app as stand-alone
-   `yarn server` starts the server to listen to the built apps.

## Execution

1. `yarn devNav` then open http://localhost:3001 to test **Nav MicroFE**
2. `yarn dev` or `yarn devMain` then open http://localhost:3000 to test **Main**
3. On Prod, `yarn build` then `yarn server`

## Sitemap

-   `public/` contains files served by the **server**.
-   `public/asset/` will be found via http://localhost:3000/asset/
-   `public/main/` will be found via http://localhost:3000/
-   `public/nav/` will be found via http://localhost:3000/nav/ via `yarn dev` or `yarn devMain`
    -   It will be found via http://localhost:3001/ via `yarn devNav`
-   `script/` contains **server** and **webpack configs**
-   `src/` contains the **App** and **MicroFE** source code
-   `src/common/` contains Utils and Helpers for both **App** and **MicroFE**.

## Documentation

-   Micro Front-End
    -   https://blog.bitsrc.io/how-to-develop-microfrontends-using-react-step-by-step-guide-47ebb479cacd
-   Server
    -   Express: https://expressjs.com/en/4x/api.html
    -   Nodemon: https://www.npmjs.com/package/nodemon
-   Webpack: https://webpack.js.org/configuration/
