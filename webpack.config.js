var path = require('path');

module.exports = {
  entry: {
    clientApp: './src/client/index.jsx',
  },

  resolve: {
    extensions: [".jsx", ".webpack.js", ".web.js", ".js", ".json"]
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'client.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|mp3)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/env',
            '@babel/react',
          ],
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(mp3|aac|ogg|wav|jpg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
      {
        test: /\.(otf|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
    ]
  }
};
