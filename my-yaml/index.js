var gutil = require("gulp-util");
var through = require("through2");
var path = require("path");
var swaggerRmExample = require("swagger-rm-example");

module.exports = () =>
  through.obj((file, enc, callback) => {
    // 中身がないとき
    if (file.isNull()) {
      callback(null, file);
      return;
    }

    // 中身がstreamのとき
    if (file.isStream()) {
      callback(new gutil.PluginError("my-yaml", "Streams not supported"));
      return;
    }

    // 中身がBufferのとき
    if (file.isBuffer()) {
      // Bufferを文字列に変換
      const strInput = file.contents.toString("utf8");

      // exampleがあると、API Gateway での取り込み時に失敗するので削除する
      const strRmExample = swaggerRmExample.removeExample(strInput);
      if (!strRmExample) {
        callback(
          new gutil.PluginError("my-yaml", "removing example is failed.")
        );
        return;
      }

      callback(
        null,
        new gutil.File({
          base: file.base,
          cwd: file.cwd,
          path: gutil.replaceExtension(file.path, ".yml"),
          contents: new Buffer(strRmExample, "utf8")
        })
      );
      return;
    }
    // 何もしない
    callback(null, file);
  });
