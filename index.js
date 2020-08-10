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
    microgear.subscribe('/gearname/Count');
    setInterval(function() {
        microgear.publish('/gearname/mygear', 'Hello world.');
    },1000);
});
 
microgear.on('message', function(topic,body) {
    console.log('incoming : '+topic+' : '+body);
});
 
microgear.on('closed', function() {
    console.log('Closed...');
});

microgear.connect(APPID);


