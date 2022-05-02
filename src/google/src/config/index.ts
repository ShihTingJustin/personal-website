require('dotenv').config();
import { GoogleSpreadsheet } from 'google-spreadsheet';

async function googleAuth() {
  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL || '',
      private_key: process.env.GOOGLE_PRIVATE_KEY || ''.replace(/\\n/g, '\n'),
    });
    await doc.loadInfo();
    return doc;
  } catch (err) {
    console.log(err);
  }
}

async function getI18nData() {
  try {
    const doc = await googleAuth();
    const sheet = doc?.sheetsByTitle['personal-website-i18n'];
    const rows = await sheet?.getRows();
    let en: [string, string][] = [];
    let tw: [string, string][] = [];

    let languages: string[] | undefined = sheet?.headerValues;
    languages?.shift();

    rows?.forEach((row) => {
      en.push([row.index, row.en]);
      tw.push([row.index, row.tw]);
    });

    return {
      languages,
      en: Object.fromEntries(en),
      tw: Object.fromEntries(tw),
    };
  } catch (err) {
    console.log(err);
  }
}

export { getI18nData };
