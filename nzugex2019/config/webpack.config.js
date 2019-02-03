const path = require('path');

const srcPath = path.resolve(__dirname, '../src');
const pubPath = path.resolve(__dirname, '../');

module.exports = {
  mode: 'development',
  entry: {
    common: srcPath + '/index.js',
  },
  output: {
    path: pubPath + '/resource/js',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
      {
        test: /\.glsl/,
        use: {
          loader: 'webpack-glsl-loader'
        }
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")({
                  browsers: ["last 2 versions", "ie >= 11", "Android >= 4"]
                })
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  }
};