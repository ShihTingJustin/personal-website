import fs from 'fs';
import { getI18nData } from '../config/index';
import { getFilePath } from '../utils/index';
import { GoogleSheetData } from '../interface/I_GoogleSheetApi';

async function updateLocalFile(filePath: string, updateData: GoogleSheetData) {
  let rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  rawData = {
    ...rawData,
    ...updateData,
  };
  fs.writeFileSync(filePath, JSON.stringify(rawData, null, 2));
}

async function syncGoogleSheet() {
  try {
    const updateData: Record<string, any> | undefined = await getI18nData();
    if (updateData) {
      for (const lang of updateData.languages) {
        const filePath = await getFilePath(lang);
        await updateLocalFile(filePath, updateData[lang]);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export { updateLocalFile, syncGoogleSheet };
