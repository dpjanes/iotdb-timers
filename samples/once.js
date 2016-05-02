var timers = require('../main'); // require('iotdb-timers');

timers.once(30, function (when) {
    console.log("+ 30 seconds in the future");
});
