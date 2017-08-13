var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var watch = require('gulp-watch')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch("*.html").on("change", reload)
    gulp.watch("./assets/css/style.css").on("change", reload)
    gulp.watch("./assets/js/main.js").on("change", reload)
})

gulp.task('images', function(){
	gulp.src(['assets/img/*.jpg', 'assets/img/*.png'])
	.pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
	.pipe(gulp.dest('assets/img'))
})

gulp.task('default', ['serve', 'images'])