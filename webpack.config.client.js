const webpack = require('webpack');
const path = require('path');
const srcPath = path.resolve(__dirname, 'src/public');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
<<<<<<< HEAD
    context: srcPath,
    target: 'web',
    entry: {
      vendor: './symptom_selector/selector.js',
      app: './js/app.js'
    },
    output: {
        path: srcPath,
        filename: '[name].bundle.js',
        publicPath: '/'
    },
=======
   context: srcPath,
   target: 'web',

   entry: './public/js/app.js',
   output: {
       path: srcPath,
       filename: './public/js/bundle.js',
       publicPath: '/'
   },
>>>>>>> f05b0cc7e1b78997eb05a9a52b763c5618f9130e
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

          ]
    },
    // plugins: [
    //         new webpack.optimize.CommonsChunkPlugin({
    //             name: 'main_bundle' // Specify the common bundle's name.
    //         })
    //     ]

    devtool: 'source-map',
};
