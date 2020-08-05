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
    setInterval(function() {
        microgear.publish('/thanapon1195/gearname/mygear', 'Hello world.');
    },1000);
});
 
microgear.on('message', function(topic,body) {
    
    console.log('incoming : '+topic+' : '+body);
});
 
microgear.on('closed', function() {
    console.log('Closed...');
});
 
microgear.connect(APPID);


