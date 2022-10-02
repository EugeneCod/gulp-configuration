//Основной модуль
import gulp from 'gulp';
//Импорт путей
import { path } from './gulp/config/path.js';

//Передаем значения в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
}

//Импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';

//Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy)
}

//Постоение сценариев выполнения задач
const dev = gulp.series(reset, copy, watcher) //series выполняет последовантельно вписанные сценарии

//Выполнение сценария по умолчанию
gulp.task('default', dev);
