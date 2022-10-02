import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    html:  `${srcFolder}/*.pug`,
    files: `${srcFolder}/files/**/*.*`, //Все папки и все файлы
  },
  watch: {
    html:  `${srcFolder}/**/*.pug`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
}