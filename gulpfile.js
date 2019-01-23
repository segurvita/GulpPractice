// gulpプラグインの読み込み
var gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
var sass = require("gulp-sass");

// style.scssの監視タスクを作成する
gulp.task("default", function () {
  // scssファイルを監視
  gulp.watch("sass/**/*.scss", function () {
    // scssファイルを取得
    gulp.src("sass/**/*.scss")
      // Sassのコンパイルを実行
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      // cssフォルダーに保存
      .pipe(gulp.dest("./css"))
  });
})