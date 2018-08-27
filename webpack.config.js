var path = require('path');

module.exports = {
  devServer: {
    port: 9999,
    contentBase: path.join(__dirname, './'),
  }
};