// gulpプラグインの読み込み
var gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
var sass = require("gulp-sass");
// watchの強化版
var watch = require("gulp-watch");
// 独自ファンクション
var myYaml = require("./my-yaml");
// yamlをマージする
var yamlMerge = require('gulp-yaml-merge');

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
// gulp.task("yaml", () => {
//   return watch("yaml/**/*.yaml", () =>
//     gulp
//       // yamlファイルを取得
//       .src("yaml/**/*.yaml")
//       // 独自ファンクション
//       .pipe(myYaml())
//       // ymlフォルダーに保存
//       .pipe(gulp.dest("./yml"))
//   )
// });

// yamlの監視タスクを作成する
gulp.task("swagger-components", () => {
  return watch("swagger-components/**/*.yaml", () =>
    gulp
      // yamlファイルを取得
      .src("swagger-components/**/*.yaml")
      // 独自ファンクション
      .pipe(yamlMerge('swagger.yml'))
      // ymlフォルダーに保存
      .pipe(gulp.dest("./swagger-merged"))
  )
});

// デフォルトのタスクに他のタスクを登録
gulp.task("default", gulp.series(gulp.parallel(
  "scss",
  "swagger-components"
)));
