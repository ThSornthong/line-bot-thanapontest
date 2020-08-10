const request = require('request')
var cron = require('node-cron');

//NETPIE
var MicroGear = require('microgear')

const KEY = 'uQHkfL7uxfYm9hv'
const SECRET = '4pP0RdTeIajLI38FaubzfTc7z'
const APPID = 'thanapon1195'
var microgear = MicroGear.create({
    gearkey : KEY,
    gearsecret : SECRET,
    alias:'app'
});
 
microgear.on('connected', function() {
    console.log('Connected...');
    microgear.setname("APP");
    microgear.subscribe('/gearname/Count');
});
microgear.on('message', function(topic,body) {
    console.log('incoming : '+topic+' : '+body);
});
 
microgear.on('closed', function() {
    console.log('Closed...');
});

microgear.connect(APPID);

cron.schedule('*/5 * * * *', () => {
  console.log('running a task every minute');
});


const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  "Authorization": "Bearer {XbZT8OPxuekGYmEqqn8fCw1Fd9Q0MDezGsa2XkGoxrahQMBnNU8oSNDZKRZTMuZGOCaugwTZQP6kqhGVCHsCtaIFSuTrV3vjxjWf9zOtJqgXHCz4RS6r1NykSjhfBpatmp2gQ5bHKkmeIeXkOziA5wdB04t89/1O/w1cDnyilFU=}"
};



notic()

function notic(){
    return request({
        method: "POST",
        uri: `${LINE_MESSAGING_API}/push`,
        headers: LINE_HEADER,
        body: JSON.stringify({
          to: 'Ub9e1f324caf9d622f16e7e8623f70158',
          messages: [{
              type: "text",
              text: "LINE \uDBC0\uDC84 x \uDBC0\uDCA4 Firebase"
          }]
        })
      },(err, httpResponse, body) => {
        if (err) {
          console.log(err)
        } else {
          console.log(body)
        }
      })
    
}

