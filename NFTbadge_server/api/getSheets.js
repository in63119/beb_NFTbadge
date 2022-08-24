const dotenv = require('dotenv');
dotenv.config();


// 구글 시트 관련
const {google} = require('googleapis');
const sheetsID = process.env.SHEETID;
const clientEmail = process.env.CLIENT_EMAIL;
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCFMCbmli2t74Vs\nS5HWX17lwMvfF4vTb74CKu3/Shm7YJvYRU1/ncDhwSRdWXgj55Wd2QxZ02wwETPN\n7vqFslc+6ou/lu3mzGrDtffbR72BMs1oLrp2wLA4EUEiMjU+aE4YtSB24pxCgo6k\neVt2sr10J3vAOqMn95C0nISc68ctjEKew9/izDsMPVtR5xHSX4YvghTfWWDxl87I\nNaDvYYiJrzG/k/1pjXruEO4f1f35D/tooolxzZhReG1XngXbX1lUv3TXEB3d5wAJ\nIWfOcNKEWqEeLhpE7S2uKizwMWNGwW1SygwEWdrrjmgMYs4PDbpmubOsYbKLjvSs\n2jM2nyxvAgMBAAECggEACzOTX1BLyOBR/duAiUwzFyqhsC0dnuuRH5iMX1dUQQdC\nhCwWn6rdBn+ady68+nQR3W6G6eUXU8GWnvVq5M9XeXH7d+JnNsKEINqkh7DfFhx3\nhxFrBZggxKO6280833dL84BZmctm7fcSAnDhyY1bKVzgEmORcPKSx9s5Z1iIbg2f\nReIzCyU57V6z0SLXsjGer9kdrrCRgdw4KBHkHIMGiLgw3cpEQOgyzra8ML7sFnDw\nDCj854HJgseLmJTc8iflI38Ivxq0RpGJD3P0+zdP77GIwYn/R8ukvVDtgX5X0fyb\nPiG6CGdIuun8HjlUEAy/3Xl5FYU2A2zk5+Dj4f12sQKBgQC6CL/9z/14LWDDVXdu\nSoLLpUBH5Lj/0agrHS/F2U0fgFN7KRobj7q4xka6sv8zFGME5VNf/po5/Og9vNL/\nlgBCBZRAfhP+T/RiW7bRHqmikozaZORdHZkSqsVpjTQpAPmndqmmus5kHXxr+mXH\nVjcKE5HG38vh5qRHjJnrqPLDEQKBgQC3R2pGkMlO6Dbl+cIQbaT/5Hic3NvWBBbW\nrM8OoTteQ+ply/Oy9rroCyd5xokcxnwgQVLvvd5RckM1Ub5vvXqudqmkIrM3k88C\naxVnIElWB5SUuMXrXG9ONLIMkrAhA51Hseypxd1fT094I8mJK4GA/oI+S79CIqA1\nblHspkv3fwKBgHTXFAZMQGzfSzvDjPwnLhjLFCFTROHfAtj5PszrWuXjCgt7WBth\nXSu51ChkTaX+MuabRY8v8BtlfVNxKbA+vLC6ok8TIGmEPAAejCaxNGeX1YFBBrB4\n62/u84gEmHL8WtBT1d+SyhfU8RU8MfpNasoYWmFmo72gxyLs6qs49CeRAoGBAKqM\niSe7KakEy7k7rcvNzAHXYClQGD3SNlJ0IoWRoYY5mtA5dsAteoXdg1F9Xy/ov67g\nOsYfH9cYhdQDCjw+zP+2KmwzYiQwpiyw6wy47aVhjnDKdFps/KKAxMKQadd+3ofN\n2NWu6y36xo+cdbjwRCV+MEK6B/MJ951g2Fln8j8PAoGAPG6FkHZFmPvrbSpBpLEz\nb25HWxBLfMyt/9UYZ+9Eq0Y6loXqkDXU2f8bGwRqAPBTe56BKG9elpFhjvlBEvkp\nQVrgLkQfppq3OwVrPFxOuR9xSrNllWMjZB5yFBWxWlFmycKY4WuCTd+4AuXtrN9R\nOFTA2dqLZhrIA8MiBsY2jnk=\n-----END PRIVATE KEY-----\n";
const authorizationSCOPE = 'https://www.googleapis.com/auth/spreadsheets';

// 구글 시트 인증
const authorize = new google.auth.JWT(clientEmail, null, private_key, [
    authorizationSCOPE
]);

// 구글 시트 가져오기
const googleSheet = google.sheets({
  version: 'v4',
  auth: authorize
})


module.exports = {
  // 구글 시트 링크 : https://docs.google.com/spreadsheets/d/17AmDvCkjMAfoVlwWRSgmMwGW8S2I2ldelQscFtAwbdI/edit?usp=sharing
  // 위의 구글 시트의 'Badge_test' 시트의 B column(수강생 이름)의 데이터를 다 보여줍니다.
  getSheets: async () => {
    try {
      const res = await googleSheet.spreadsheets.values.get({
        spreadsheetId: sheetsID,
        range: 'Badge_test!B:D2'
      });
      let result = res.data.values;
      console.log(result);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
};

