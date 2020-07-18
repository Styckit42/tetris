var path = require('path');

module.exports = {
  entry: {
    clientApp : './src/client/index.jsx',
    // servApp : './src/server/index.js'
  },

  resolve: {
    extensions: [".jsx", "", ".webpack.js", ".web.js", ".js", ".json"]
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  externals: ["fs"],

  module: {
    loaders: [{
      test: /\.(js|jsx|mp3)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query:{
        presets: ["es2015", "react", "stage-0"]
      }
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader'
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'css-loader'
    },
    {
      test: /\.(mp3|aac|ogg|wav)$/,
      exclude: /node_modules/,
      loader: "file-loader",
    },
  ]}
};
