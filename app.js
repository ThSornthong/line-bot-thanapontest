//NETPIE

// Reply with two static messages

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    reply(reply_token)
    res.sendStatus(200)
})
app.listen(port)
function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {XbZT8OPxuekGYmEqqn8fCw1Fd9Q0MDezGsa2XkGoxrahQMBnNU8oSNDZKRZTMuZGOCaugwTZQP6kqhGVCHsCtaIFSuTrV3vjxjWf9zOtJqgXHCz4RS6r1NykSjhfBpatmp2gQ5bHKkmeIeXkOziA5wdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: 'Hello'
        },
        {
            type: 'text',
            text: 'How are you???????????7'
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/push',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
    
}


