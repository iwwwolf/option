const path = require('path'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin');
      //WebpackProvideGlobalPlugin = require('webpack-provide-global-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: 'src/js/postcss.config.js'
                        }
                    }
                }
            ]
            }, {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'src/images'
                        }
                    }
                ],
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'src/fonts/'
                    }
                }]
            }
        ]
    },
    devServer: {
        overlay: true,
        contentBase: path.join(__dirname, 'pages')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyWebpackPlugin([
            { from: './node_modules/flag-icon-css/flags', to: './src/images/flags/' },
            { from: './src/images', to: './src/images/' },
            { from: './src/videos', to: './src/videos/' }
        ])
        // new WebpackProvideGlobalPlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // })
    ]
}
