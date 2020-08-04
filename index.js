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
    /*setInterval(function() {
        microgear.chat('mygear', 'Hello world.');
    },1000);*/
});
 
microgear.on('message', function(topic,body) {
    console.log('incoming : '+topic+' : '+body);
});
 
microgear.on('closed', function() {
    console.log('Closed...');
});
 
microgear.connect(APPID);


