import dartSass from 'sass';
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'; // Сжатие CSS файла
import webpcss from 'gulp-webpcss'; // Вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа запросов

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
    .pipe(groupCssMediaQueries())
    .pipe(webpcss ({
      webpClass: '.webp',
      noWebpClass: '.no-webp',
    }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
      cascade: true,
    }))
    // Раскомментировать если нужна несжатая копия файла стилей
    // .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}