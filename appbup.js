//NETPIE
var MicroGear = require('microgear')

const KEY = 'uQHkfL7uxfYm9hv'
const SECRET = '4pP0RdTeIajLI38FaubzfTc7z'
const APPID = 'thanapon1195'
var microgear = MicroGear.create({
    gearkey : KEY,
    gearsecret : SECRET,
    alias:'app2'
});
 
microgear.on('connected', function() {
    console.log('Connected...');
    microgear.setname("APP2");
    microgear.subscribe('/gearname/mygear');
});
microgear.on('message', function(topic,body) {
    console.log('incoming : '+topic+' : '+body);
});
 
microgear.on('closed', function() {
    console.log('Closed...');
});

microgear.connect(APPID);


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
    console.log(req.body.events[0].source.userId);
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
            text: 'How are you???????????9'
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
        console.log(reply_token);
    });
    //microgear.publish('/thanapon1195/gearname/mygear', reply_token);
}
/*function notic(bodys) {
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
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    }).then(() => {
        return res.status(200).send("Done");
    }).catch(error => {
        return Promise.reject(error);
    });
    //microgear.publish('/thanapon1195/gearname/mygear', reply_token);
}

microgear.on('message', function(topic,body) { 
    reply('da7b5ec8d20d4c269ea51d1f4e051531')
    res.sendStatus(200)
    console.log('incoming : '+topic+' : '+body);
});
microgear.on('closed', function() {
    console.log('Closed...');
});
*/