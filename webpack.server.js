const fs = require('fs')
const path = require('path');
const resolve = require('resolve');
const nodeExternals = require('webpack-node-externals');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js,\.ts,\.tsx$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
        new ForkTsCheckerWebpackPlugin({
          typescript: resolve.sync('typescript', {
            basedir: fs.realpathSync(process.cwd()) + '/node_modules',
          }),
          async: false,
          useTypescriptIncrementalApi: true,
          checkSyntacticErrors: true,
          resolveModuleNameModule: process.versions.pnp ? `${__dirname}/pnpTs.js` : undefined,
          resolveTypeReferenceDirectiveModule: process.versions.pnp
            ? `${__dirname}/pnpTs.js`
            : undefined,
          tsconfig: `${__dirname}/tsconfig.json`,
          reportFiles: [
            '**',
            '!**/__tests__/**',
            '!**/?(*.)(spec|test).*',
            '!**/src/setupProxy.*',
            '!**/src/setupTests.*',
          ],
          silent: false,
          // The formatter is invoked directly in WebpackDevServerUtils during development
          formatter: typescriptFormatter,
        }),
  ]
};