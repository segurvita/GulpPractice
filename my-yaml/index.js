var gutil = require('gulp-util');
var through = require('through2');
var path = require('path');

module.exports = () => through.obj((file, enc, callback) => {
  // 何もしない
  callback(null, file);
});