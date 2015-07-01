var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development:{
    db: 'mongodb://localhost:27017/db',
    rootPath: rootPath,
    port: process.env.PORT || 3000
  },
  production:{
    db: 'mongodb://heroku_app30694821:igruskp893d5fh9jghi5kbmi86@ds061631.mongolab.com:61631/heroku_app30694821',
    rootPath: rootPath,
    port: process.env.PORT || 80

  }


}