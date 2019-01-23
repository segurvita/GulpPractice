// gulpプラグインの読み込み
var gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
var sass = require("gulp-sass");
// watchの強化版
var watch = require("gulp-watch");

// style.scssの監視タスクを作成する
gulp.task("sass", function() {
  // scssファイルを監視
  return watch("sass/**/*.scss", function() {
    // scssファイルを取得
    gulp
      .src("sass/**/*.scss")
      // Sassのコンパイルを実行
      .pipe(
        sass({
          outputStyle: "expanded"
        })
      )
      // コンパイルエラーを表示
      .on("error", sass.logError)
      // cssフォルダーに保存
      .pipe(gulp.dest("./css"));
  });
});

// デフォルトのタスクに他のタスクを登録
gulp.task("default", gulp.series(gulp.parallel("sass")));
