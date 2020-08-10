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
    console.log('Connected gear');
    microgear.setname("app");
    microgear.subscribe('/gearname/mygear');
    
});
 
microgear.on('message', function(topic,body) {
    console.log('incoming : '+topic+' : '+body);
});
 
microgear.on('closed', function() {
    console.log('Closed...');
});

microgear.connect(APPID);

function send() {
    setInterval(function() {
        microgear.publish('/gearname/mygear', 'off');
    },1000);
}

send()