//Основной модуль
import gulp from 'gulp';
//Импорт путей
import { path } from './gulp/config/path.js';
// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';


//Передаем значения в глобальную переменную
global.app = {
    path,
    gulp,
    plugins,
  }

//Импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';

//Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.parallel(copy, html)

//Постоение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, watcher) //series выполняет последовантельно вписанные сценарии

//Выполнение сценария по умолчанию
gulp.task('default', dev);