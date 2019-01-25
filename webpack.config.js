const path = require('path'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      ImageminPngquant = require('imagemin-pngquant');

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
        },{
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
            }, 
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     use: [
            //         {loader: 'url-loader'},
            //         {
            //             loader: 'img-loader',
            //             options: {
            //                 plugins: [
            //                     // require('imagemin-gifsicle')({
            //                     //     interlaced: false
            //                     // }),
            //                     // require('imagemin-mozjpeg')({
            //                     //     progressive: true,
            //                     //     arithmetic: false
            //                     // }),
            //                     // require('imagemin-pngquant')({
            //                     //     floyd: 0.5,
            //                     //     speed: 2
            //                     // }),
            //                     // require('imagemin-svgo')({
            //                     //     plugins: [
            //                     //         { removeTitle: true },
            //                     //         { convertPathData: false }
            //                     //     ]
            //                     // })
            //                     {
            //                         loader: ImageminPngquant,
            //                         options: {
            //                             floyd: 0.5,
            //                             speed: 2
            //                         }
            //                     }
            //                 ]
            //             }
            //         }
            //     ]
            // }, 
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
            },
            {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'src/fonts/'
                }
            }]
        }]
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
            { from: './node_modules/flag-icon-css/flags', to: './src/images/flags/' }
        ])
    ]
}
