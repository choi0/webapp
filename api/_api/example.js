/**
 * Created by dchoi1 on 8/1/17.
 */

var needle = require('needle'),
    config = require('../config'),
    fs = require('fs')

module.exports = {
    getExample: function (body, callback) {
        console.log("API getExample started " +body);
        callback(null, "API getExample finished");
    }
}