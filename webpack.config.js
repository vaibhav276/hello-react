const webpack = require('webpack');

module.exports = {
   mode: 'development',
   entry: './app.tsx',
   output: {
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js']
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
         }
      ]
   },
   plugins: [
   ]
}
