var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function () {
  gulp.src("sass/**/*.scss")
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest("./css"))
})