const path = require('path');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
    target: 'web',

    entry: './public/js/app.js',
    output: {
        path: srcPath,
        filename: './public/js/bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                  presets:['es2015', 'react']
                }
            }
            // {
            //     test: /\.css$/,
            //     loader: combineLoaders([
            //       {
            //         loader: 'style-loader'
            //       },
            //       {
            //         loader: 'css-loader',
            //         query: {
            //           modules: true,
            //           localIdentName: '[name]__[local]___[hash:base64:5]'
            //         }
            //       }
            //     ])}
          ]

    },

    devtool: 'source-map'
};
