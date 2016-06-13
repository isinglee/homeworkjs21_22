/*jslint node: true */
/*global describe, it, expect, toBe*/
'use strict';

var app = require('../pow.js');

describe("app.pow function", function () {

    it("raises number 'base' to power of positive 'exponent'", function () {
        // prepare
        var result;

        // act
        result = app.pow(2, 3);

        //assert
        expect(result).toBe(8);
    });

    it("throws an exception if 'base' can not be parsed as integer", function () {
        // prepare
        var result, message;

        // act
        try {
            result = app.pow('invalid', 3);
        } catch (e) {
            message = e.message;
        }

        //assert
        expect(message).toBe('pow: base should be integer number');
    });

    it("throws an exception if 'exponent' can not be parsed as integer", function () {
        // prepare
        var result, message;

        // act
        try {
            result = app.pow(2, 'invalid');
        } catch (e) {
            message = e.message;
        }

        //assert
        expect(message).toBe('pow: exponent should be positive integer number');
    });

    it("throws an exception if 'exponent' is negative", function () {
        // prepare
        var result, message;

        // act
        try {
            result = app.pow(2, -3);
        } catch (e) {
            message = e.message;
        }

        //assert
        expect(message).toBe('pow: exponent is negative');
    });

});
