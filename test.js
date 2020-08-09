const request = require('request')

request({
  method: 'POST',
  uri: 'https://api.line.me/v2/bot/message/push',
  header: {
    "Content-Type": "application/json",
    'Authorization': 'Bearer {XbZT8OPxuekGYmEqqn8fCw1Fd9Q0MDezGsa2XkGoxrahQMBnNU8oSNDZKRZTMuZGOCaugwTZQP6kqhGVCHsCtaIFSuTrV3vjxjWf9zOtJqgXHCz4RS6r1NykSjhfBpatmp2gQ5bHKkmeIeXkOziA5wdB04t89/1O/w1cDnyilFU=}'
  },
  body: JSON.stringify({
    to: "da7b5ec8d20d4c269ea51d1f4e051531",
    messages: [{
        type: "text",
        text: "LINE \uDBC0\uDC84 x \uDBC0\uDCA4 Firebase"
    }]
  })}, (err, httpResponse, body) => {
    if (err) {
      console.log(err)
    } else {
      console.log(body)
    }
})

const request = require('request')

request({
  method: 'POST',
  uri: 'https://notify-api.line.me/api/notify',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  auth: {
    bearer: 'zH7O77FjUZxv28qIylbQr7CB0PqMrfx8yLnZzbl', //token
  },
  form: {
    message: 'ทดสอบ', //ข้อความที่จะส่ง
  },
}, (err, httpResponse, body) => {
  if (err) {
    console.log(err)
  } else {
    console.log(body)
  }
})

curl -v -X GET https://api.line.me/v2/profile \
-H 'Authorization: Bearer {XbZT8OPxuekGYmEqqn8fCw1Fd9Q0MDezGsa2XkGoxrahQMBnNU8oSNDZKRZTMuZGOCaugwTZQP6kqhGVCHsCtaIFSuTrV3vjxjWf9zOtJqgXHCz4RS6r1NykSjhfBpatmp2gQ5bHKkmeIeXkOziA5wdB04t89/1O/w1cDnyilFU=}'
