const path = require('path');

module.exports = {
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      static: path.resolve(__dirname, 'src/static/')
    }
  }
}