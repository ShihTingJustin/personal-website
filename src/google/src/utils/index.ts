import path from 'path';

async function getFilePath(lang: string) {
  return path.resolve(__dirname, `../../../locales/${lang}/translation.json`).toString();
}

export { getFilePath };
