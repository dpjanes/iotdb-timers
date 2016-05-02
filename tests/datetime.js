/*
 *  datetime.js
 *
 *  David Janes
 *  IOTDB
 *  2016-05-01
 *
 *  Test datetime class
 */

const assert = require("assert");
const datetime = require("../datetime");

describe('datetime', function() {
    const reference_date = new Date(2013, 11, 15, 9, 30, 1, 0);
    const reference_epoch = reference_date.getTime() / 1000;
    const reference_iosdatetime = reference_date.toISOString();

    before(function() {
        datetime._dt_now = reference_date;
    });
    after(function() {
        datetime._dt_now = null;
    });

    describe('constructor', function() {
        it('no argument - should be reference', function() {
            dt = new datetime.DateTime();

            assert.strictEqual(dt._dd.year, 2013);
            assert.strictEqual(dt._dd.isodatetime, reference_iosdatetime);
            assert.strictEqual(dt._dd.epoch, reference_epoch);
        });
        it('reference argument - should be reference', function() {
            dt = new datetime.DateTime(reference_date);

            assert.strictEqual(dt._dd.year, 2013);
            assert.strictEqual(dt._dd.isodatetime, reference_iosdatetime);
            assert.strictEqual(dt._dd.epoch, reference_epoch);
        });
    });
});
