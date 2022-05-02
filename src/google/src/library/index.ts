import fs from 'fs';
import { GoogleSheetData } from '../interface/I_GoogleSheetApi';

async function updateLocalFile(filePath: string, updateData: GoogleSheetData) {
  let rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  rawData = {
    ...rawData,
    ...updateData,
  };
  fs.writeFileSync(filePath, JSON.stringify(rawData, null, 2));
}

export { updateLocalFile };
