/*
 *  Turn on all the lights in the basement 
 *  10m before sunset and 
 *  turn them off 10m after sunrise.
 */

var iotdb = require('iotdb');
var timers = require('iotdb-timers');

var lights = iotdb
    .connect()
    .with_facet(":lighting")
    .with_floor("Basement");

var do_lights = function () {
    // lights.set(":on", sunset.isAfter() || sunrise.isBefore());
};

var sunset = timers.sunset(-10 * 60, do_lights);
var sunrise = timers.sunrise(10 * 60, do_lights);

do_lights();
