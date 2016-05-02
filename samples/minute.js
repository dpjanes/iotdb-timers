var timers = require('../main'); // require('iotdb-timers');

/*
 *  No arguments - run once per minute, at ##:##:00
 */
timers.minute_timer(function (when) {
    console.log("+ once an minute, on the minute");
});


/*
 *  Number argument: shortcut for { minute_repeat: # }
 *  - run once every two minutes, at ##:##:00
 */
timers.minute_timer(2, function (when) {
    console.log("+ once every two minutes minute, on the minute");
});


/**
 *  second: run this many seconds after the minute
 *  in this case, at ##:##:30
 */
timers.minute_timer({
    second: 30
}, function (when) {
    console.log("+ once an minute, at ##:##:30");
});


/**
 *  second: run this many seconds after the minute
 *  in this case, at ##:##:30
 *
 *  minute_repeat: run only once this many minutes
 */
timers.minute_timer({
    second: 30,
    minute_repeat: 4
}, function (when) {
    console.log("+ once every 4 minutes, at ##:##:30");
});
