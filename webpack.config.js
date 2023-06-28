const path = require('path');

module.exports = {
  mode: 'production',
  entry: './server.js', // Replace with your entry point file
  output: {
    path: path.resolve(__dirname, 'dist'), // Replace with your desired output directory
    filename: 'bundle.js', // Replace with your desired output filename
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel loader to transpile JavaScript files
          options: {
            presets: ['@babel/preset-env'], // Replace with your desired Babel presets
          },
        },
      },
    ],
  },
};
