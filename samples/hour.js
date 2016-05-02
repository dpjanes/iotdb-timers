var timers = require('../main'); // require('iotdb-timers');

/*
 *  No arguments - run once per hour, at ##:##:00
 */
timers.hour_timer(function (when) {
    console.log("+ once an hour, on the hour");
});


/*
 *  Number argument: shortcut for { hour_repeat: # }
 *  - run once every two hours, at ##:##:00
 */
timers.hour_timer(2, function (when) {
    console.log("+ once every two hours hour, on the hour");
});


/**
 *  minute: run this many minutes after the hour
 *  in this case, at ##:##:30
 */
timers.hour_timer({
    minute: 30
}, function (when) {
    console.log("+ once an hour, at ##:30:##");
});


/**
 *  minute: run this many minutes after the hour
 *  in this case, at ##:##:30
 *
 *  hour_repeat: run only once this many hours
 */
timers.hour_timer({
    minute: 30,
    hour_repeat: 4
}, function (when) {
    console.log("+ once every 4 hours, at ##:30:##");
});
