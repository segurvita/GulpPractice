// gulpプラグインの読み込み
var gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
var sass = require("gulp-sass");
// watchの強化版
var watch = require("gulp-watch");
// 独自ファンクション
var myYaml = require("./my-yaml");

// scssの監視タスクを作成する
gulp.task("scss", () => {
  return watch("scss/**/*.scss", () => 
    // scssファイルを取得
    gulp
      .src("scss/**/*.scss")
      // Sassのコンパイルを実行
      .pipe(
        sass({
          outputStyle: "expanded"
        })
      )
      // コンパイルエラーを表示
      .on("error", sass.logError)
      // cssフォルダーに保存
      .pipe(gulp.dest("./css"))
  )
});

// yamlの監視タスクを作成する
gulp.task("yaml", () => {
  return watch("yaml/swagger.yaml", () =>
    gulp
      // yamlファイルを取得
      .src("yaml/swagger.yaml")
      // 独自ファンクション
      .pipe(myYaml())
      // ymlフォルダーに保存
      .pipe(gulp.dest("./yml"))
  )
});

// デフォルトのタスクに他のタスクを登録
gulp.task("default", gulp.series(gulp.parallel(
  "scss",
  "yaml"
)));
