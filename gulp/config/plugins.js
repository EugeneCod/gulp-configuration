import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import browsersync from "browser-sync" // Локальный сервер
import newer from "gulp-newer" // Проверка обновления изображений
import ifPlugin from "gulp-if" // Условное ветвение

export const plugins = {
  replace,
  plumber,
  notify,
  browsersync,
  newer,
  ifPlugin,
}
