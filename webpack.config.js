module.exports = {
    entry: './jsx/app.jsx',
    output: {filename:'build.js'},
    module: {
      loaders: [{
        test: /\.jsx?$/,      
       exclude: /(node_modules)/,
        loaders: ['babel-loader']
      }]
    }
  }