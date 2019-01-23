var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("default", function () {
  gulp.watch("sass/**/*.scss", function(){
    gulp.src("sass/**/*.scss")
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest("./css"))
  });
})