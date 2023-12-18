const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StylexPlugin = require('@stylexjs/webpack-plugin')

module.exports = (env, argv) => ({
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: '',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.j|tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        // Ensure that the stylex plugin is used before Babel
        new StylexPlugin({
            filename: 'styles.[contenthash].css',
            // get webpack mode and set value for dev
            dev: argv.mode === 'development',
            // Use statically generated CSS files and not runtime injected CSS.
            // Even in development.
            runtimeInjection: false,
            // optional. default: 'x'
            classNamePrefix: 'x',
            // Required for CSS variable support
            unstable_moduleResolution: {
                // type: 'commonJS' | 'haste'
                // default: 'commonJS'
                type: 'commonJS',
                // The absolute path to the root directory of your project
                rootDir: __dirname,
            },
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
    ],
})
