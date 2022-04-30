import { GoogleSpreadsheet } from 'google-spreadsheet';

interface Credentials {
  sheetId: string;
  clientEmail: string;
  privateKey: string;
}

async function gapi({ sheetId, clientEmail, privateKey }: Credentials) {
  try {
    const doc = new GoogleSpreadsheet(sheetId);
    await doc.useServiceAccountAuth({
      client_email: clientEmail,
      private_key: privateKey.replace(/\\n/g, '\n'),
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    // const data = rows.map()
    return doc;
  } catch (e) {
    console.log(e);
  }
}

export default gapi;
