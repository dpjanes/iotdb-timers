var timers = require('../main'); // require('iotdb-timers');

var give_update = function (sunset) {
    console.log("+ sunset is at", sunset.getDate());
    console.log("+ it is %s sunset", sunset.isBefore() ? "before" : "after");
};

var sunset = timers.sunset(function (when) {
    give_update(sunset);
});

give_update(sunset);
