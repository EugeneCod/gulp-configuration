export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}`
    },
    notify: true, // Сообщения в браузере
    port: 3000, // Порт локального сервера
  });
}