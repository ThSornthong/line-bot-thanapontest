//NETPIE
var MicroGear = require('microgear')

const KEY = 'kY0IZ25NRM75uZx'
const SECRET = 'pdfg4bYwxl8VUy341YgRzxDzl'
const APPID = 'thanapon1195'
var microgear = MicroGear.create({
    gearkey : KEY,
    gearsecret : SECRET
});
 
microgear.on('connected', function() {
    console.log('Connected...');
    microgear.setname("Count");
    microgear.setAlias("app");
    microgear.subscribe('/thanapon1195/gearname/mygear');
});


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
            text: 'How are you???????????'
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
    microgear.publish('/thanapon1195/gearname/mygear', reply_token);
}
function notic(bodys) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {XbZT8OPxuekGYmEqqn8fCw1Fd9Q0MDezGsa2XkGoxrahQMBnNU8oSNDZKRZTMuZGOCaugwTZQP6kqhGVCHsCtaIFSuTrV3vjxjWf9zOtJqgXHCz4RS6r1NykSjhfBpatmp2gQ5bHKkmeIeXkOziA5wdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        replyToken: 'da7b5ec8d20d4c269ea51d1f4e051531',
        messages: [{
            type: 'text',
            text: 'Hello'
        },
        {
            type: 'text',
            text: bodys
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/push',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
    //microgear.publish('/thanapon1195/gearname/mygear', reply_token);
}

microgear.on('message', function(topic,body) { 
    notic(body)
    res.sendStatus(200)
    console.log('incoming : '+topic+' : '+body);
});
microgear.on('closed', function() {
    console.log('Closed...');
});
microgear.connect(APPID);