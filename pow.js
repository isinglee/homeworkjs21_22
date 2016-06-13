/*jslint node: true */
/*jslint plusplus: true */
'use strict';

var app = {
    pow: function (base, exponent) {
        var i, result = 1;
        base = parseInt(base, 10);
        if (isNaN(base)) {
            throw new TypeError('pow: base should be integer number');
        }

        exponent = parseInt(exponent, 10);
        if (isNaN(exponent)) {
            throw new TypeError('pow: exponent should be positive integer number');
        }

        if (exponent < 0) {
            throw new TypeError('pow: exponent is negative');
        }

        for (i = 0; i < exponent; i++) {
            result *= base;
        }

        return result;
    }

};

module.exports = app;
