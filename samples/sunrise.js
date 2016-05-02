var timers = require('../main'); // require('iotdb-timers');

var give_update = function (sunrise) {
    console.log("+ sunrise is at", sunrise.getDate());
    console.log("+ it is %s sunrise", sunrise.isBefore() ? "before" : "after");
};

var sunrise = timers.sunrise(function (when) {
    give_update(sunrise);
});

give_update(sunrise);
