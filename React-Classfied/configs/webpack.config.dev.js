/**
 * Dev Config
 **/
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    // Context for the Webpack to get the path from
    context: paths.appSrc,

    module: {
        //This package allows transpiling JavaScript files using Babel and webpack.
        rules: [
            {
                test: /\.js$/,
                include: paths.appSrc,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        sourceMaps: true,
                        presets: [
                            ["env", {"modules": false}], // Setting this to false will not transform modules.
                            "react", "es2015", "stage-0" // Transpile React components to JavaScript
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    // Adds CSS to the DOM by injecting a <style> tag
                    loader: "style-loader"
                }, {
                    // The CSS loader returns the CSS for the imported CSS Files
                    loader: "css-loader"
                }, {
                    // Sass to CSS Compiler
                    loader: "sass-loader"
                }]
            }
        ]
    },

    entry: [
        // There is no inline: true flag in the webpack-dev-server configuration, because the webpack-dev-server module has no access to the webpack configuration.
        // Instead, the user must add the webpack-dev-server client entry point to the webpack configuration.
        // https://github.com/webpack/docs/wiki/webpack-dev-server
        'webpack-dev-server/client?http://localhost:8080',
        // Main entry point of the Application
        './index.js'
    ],

    output: {
        // Destination Path of the Build Artifacts
        path: paths.appDist,
        // Destination File Name of the Build Artifacts
        filename: '[name].bundle.js',
        // Default Fallback Path
        publicPath: '/'
    },

    plugins: [
        // This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles. -- https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({template: 'index.ejs',}),
    ],

    devtool: 'cheap-module-eval-source-map',

    devServer: {
        compress: true
    }
};


