const path = require('path');
module.exports = {
 "mode": "production",
 "entry": "./src/index.js",
 "output": {
   "path": __dirname + '/dist',
   "filename": "bundle.js"
 },
devServer: {
    static: path.join(__dirname, 'dist')
 }
}