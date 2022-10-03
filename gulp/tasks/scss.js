import dartSass from 'sass';
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'

const sass = gulpSass(dartSass); // Передача компилятора плагину gulpSass

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { soursmaps: true }) // soursmaps: true - вкл. карты исходников
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SCSS',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
      outputStyle: 'expanded' // Стиль собранного файла
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}