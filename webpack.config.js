var path = require('path');

module.exports = {
    entry: ['./src/App.css', './src/index.js'],
    output: {
        path: path.join(__dirname, '/'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    module: {
        rules: [
            {
                test: [/\.css$/,/\.scss$/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                        },
                    },
                    {loader: 'extract-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules'],
                        },
                    }],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_compontents)/,
                query: {
                    presets: ['es2015','react'],
                },
            },
            {
                test: /\.svg$/,
                loaders: [
                    'babel-loader',
                    {
                        loader: 'react-svg-loader',
                        query: {
                            jsx: true
                        }
                    },
                ]
            },{
                test: /\.(jpe?g|png|gif|mp3|ttf)$/i,
                include: path.resolve(__dirname, './src/resources'),
                use: [{
                    loader: 'file-loader'
                }]
            }],
    }
};