var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');


//script paths
var jsFiles = 'assets/scripts/utils/*.js',
	jsFilesSimple = 'assets/scripts/simplenroll/*.js'
    jsDest = 'dist/scripts';

gulp.task('scripts', function() {
	// gulp.src(jsFiles)
 //    .pipe(concat('scripts_utils.js'))
 //    .pipe(gulp.dest(jsDest));

	return gulp.src([jsFiles, jsFilesSimple])
    .pipe(concat('a.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));

});

