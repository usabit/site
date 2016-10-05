var devFolder = "devApp/";
var excludeFolder = "!devApp/";
var buildFolder = "build/";

var gulp        = require('gulp');
var concat      = require('gulp-concat');
var connect     = require('gulp-connect');
// general modules
var plumber     = require('gulp-plumber');

// html modules

var jade     = require('gulp-jade');

// image modules

var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');

// css modules
var stylus      = require('gulp-stylus');
var jeet        = require('jeet');
var nib         = require('nib');
var rupture     = require('rupture');
var koutoSwiss  = require('kouto-swiss');
var prefixer    = require('autoprefixer-stylus');
var sourcemaps  = require('gulp-sourcemaps');

// js modules
var uglify      = require('gulp-uglify');       // minifica js
var jshint      = require('gulp-jshint');       // modulo para validar javascript
var stripDebug  = require('gulp-strip-debug');  // remover os consoles.log para deploy
var stylish     = require('jshint-stylish');

// dev modules
var rename      = require('gulp-rename');
var bower       = require('gulp-bower');
 
gulp.task('scripts', function() {
  return gulp.src(devFolder+'assets/js/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(buildFolder+'assets/js'))
    .pipe(connect.reload())
  ;
});

gulp.task('buildScripts', function(){
  return gulp.src(devFolder+'assets/js/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(stripDebug())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(buildFolder+'assets/js'))
    .pipe(connect.reload())
  ;
});

gulp.task('styles', function(){
  return gulp.src(devFolder+'assets/stylus/include.styl')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use:[nib(), koutoSwiss(), prefixer(), jeet(), rupture()],
      compress: true
    }))
    .pipe(rename("main.css"))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(buildFolder+'assets/css/'))
    .pipe(connect.reload())
  ;    
});

gulp.task('html', function() {
  // Vai buscar os arquivos jade dentro de todas as pastas de templates, mas não pega os arquivos dentro de partials.
  return gulp.src([devFolder + 'templates/**/!(_)*.jade', excludeFolder+'templates/_partials/**', excludeFolder+'templates/_page-blocks/**'])
    .pipe(jade())
    .pipe(gulp.dest(buildFolder))
    .pipe(connect.reload())
  ;
});

gulp.task('images', function () {
  return gulp.src(devFolder+'assets/img/**')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}, {cleanupIDs: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(buildFolder+'assets/img/'))
    .pipe(connect.reload())
  ;
});

gulp.task('bower', function() {
  return bower();
});

/////////////////////////////////////////////////////////////////////////

gulp.task('build', ['styles', 'html', 'images', 'buildScripts', 'bower']);

gulp.task('default', ['styles', 'html', 'images', 'scripts'], function(){

  connect.server({
    root: buildFolder,
    livereload: true
  });

  gulp.watch(devFolder+'assets/stylus/**/*.styl', ['styles']);
  gulp.watch(devFolder+'**/*.jade', ['html']);
  gulp.watch(devFolder+'assets/img/*', ['images']);
  gulp.watch(devFolder+'assets/js/*', ['scripts']);
});