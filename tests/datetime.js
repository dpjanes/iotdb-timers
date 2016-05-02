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
    const reference0_date = new Date(2013, 11, 15, 9, 30, 1, 0);
    const reference0_epoch = reference0_date.getTime() / 1000;
    const reference0_isodatetime = reference0_date.toISOString();

    const reference1_date = new Date(2015, 3, 1, 23, 0, 59, 0);
    const reference1_epoch = reference1_date.getTime() / 1000;
    const reference1_isodatetime = reference1_date.toISOString();

    before(function() {
        datetime._dt_now = reference0_date;
    });
    after(function() {
        datetime._dt_now = null;
    });

    describe('constructor', function() {
        describe('expect the reference', function() {
            it('no argument - should be reference', function() {
                dt = new datetime.DateTime();

                assert.strictEqual(dt._dd.year, 2013);
                assert.strictEqual(dt._dd.isodatetime, reference0_isodatetime);
                assert.strictEqual(dt._dd.epoch, reference0_epoch);
            });
            it('reference Date argument - should be reference', function() {
                dt = new datetime.DateTime(reference0_date);

                assert.strictEqual(dt._dd.year, 2013);
                assert.strictEqual(dt._dd.isodatetime, reference0_isodatetime);
                assert.strictEqual(dt._dd.epoch, reference0_epoch);
            });
            it('reference ISO argument - should be reference', function() {
                dt = new datetime.DateTime(reference0_isodatetime);

                assert.strictEqual(dt._dd.year, 2013);
                assert.strictEqual(dt._dd.isodatetime, reference0_isodatetime);
                assert.strictEqual(dt._dd.epoch, reference0_epoch);
            });
            it('dictionary/empty argument - should be reference', function() {
                dt = new datetime.DateTime({});

                assert.strictEqual(dt._dd.year, 2013);
                assert.strictEqual(dt._dd.isodatetime, reference0_isodatetime);
                assert.strictEqual(dt._dd.epoch, reference0_epoch);
            });
        });
        describe('expect change', function() {
            it('dictionary.year argument - should be year with everything reset', function() {
                dt = new datetime.DateTime({
                    year: 2015,
                });

                assert.strictEqual(dt._dd.year, 2015);
                assert.strictEqual(dt._dd.month, 1);
                assert.strictEqual(dt._dd.day, 1);
                assert.strictEqual(dt._dd.hour, 0);
                assert.strictEqual(dt._dd.minute, 0);
                assert.strictEqual(dt._dd.second, 0);
            });
            it('dictionary.month argument - should be reference.year with everything else reset', function() {
                dt = new datetime.DateTime({
                    month: 3,
                });

                assert.strictEqual(dt._dd.year, 2013);
                assert.strictEqual(dt._dd.month, 3);
                assert.strictEqual(dt._dd.day, 1);
                assert.strictEqual(dt._dd.hour, 0);
                assert.strictEqual(dt._dd.minute, 0);
                assert.strictEqual(dt._dd.second, 0);
            });
            it('dictionary.day argument - should be reference.year,month with everything else reset', function() {
                dt = new datetime.DateTime({
                    day: 21,
                });

                assert.strictEqual(dt._dd.year, 2013);
                assert.strictEqual(dt._dd.month, 12);
                assert.strictEqual(dt._dd.day, 21);
                assert.strictEqual(dt._dd.hour, 0);
                assert.strictEqual(dt._dd.minute, 0);
                assert.strictEqual(dt._dd.second, 0);
            });
        });
        describe('exceptions', function() {
            it('number argument', function() {
                assert.throws(function() {
                    dt = new datetime.DateTime(0);
                }, Error);
            });
            it('list argument', function() {
                assert.throws(function() {
                    dt = new datetime.DateTime([ 2015, 1, 1 ]);
                }, Error);
            });
            it('DateTime argument', function() {
                assert.throws(function() {
                    dt = new datetime.DateTime(new datetime.DateTime());
                }, Error);
            });
            it('bad year', function() {
                assert.throws(function() {
                    dt = new datetime.DateTime({
                        year: "2005",
                    });
                }, Error);
            });
            it('bad month', function() {
                assert.throws(function() {
                    dt = new datetime.DateTime({
                        month: "2005",
                    });
                }, Error);
            });
            it('bad day', function() {
                assert.throws(function() {
                    dt = new datetime.DateTime({
                        day: "2005",
                    });
                }, Error);
            });
            it('bad hour', function() {
                assert.throws(function() {
                    dt = new datetime.DateTime({
                        hour: "2005",
                    });
                }, Error);
            });
            it('bad minute', function() {
                assert.throws(function() {
                    dt = new datetime.DateTime({
                        minute: "2005",
                    });
                }, Error);
            });
            it('bad second', function() {
                assert.throws(function() {
                    dt = new datetime.DateTime({
                        second: "2005",
                    });
                }, Error);
            });
        });
    });
    describe('set', function() {
        it('no argument - should be reference', function() {
            dt = new datetime.DateTime();
            dt.set();

            assert.strictEqual(dt._dd.year, 2013);
            assert.strictEqual(dt._dd.isodatetime, reference0_isodatetime);
            assert.strictEqual(dt._dd.epoch, reference0_epoch);
        });
        it('Date argument - should change', function() {
            dt = new datetime.DateTime();
            dt.set(reference1_date);

            assert.strictEqual(dt._dd.year, 2015);
            assert.strictEqual(dt._dd.isodatetime, reference1_isodatetime);
            assert.strictEqual(dt._dd.epoch, reference1_epoch);
        });
        it('ISO argument - should change', function() {
            dt = new datetime.DateTime();
            dt.set(reference1_isodatetime);

            assert.strictEqual(dt._dd.year, 2015);
            assert.strictEqual(dt._dd.isodatetime, reference1_isodatetime);
            assert.strictEqual(dt._dd.epoch, reference1_epoch);
        });
    });
});
