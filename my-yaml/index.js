var gutil = require( 'gulp-util' );
var through  = require( 'through2' );
var path = require( 'path' );

module.exports = function () {
  return through.obj(function( file, enc, callback ) {
    // 何もしない
    return callback(null, file);
  });
};