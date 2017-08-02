/**
 * Created by dchoi1 on 8/1/17.
 */
var express = require('express');
var fs = require('fs');

var API = {};
fs.readdirSync('./api/_api/').forEach(function (file) {
    if (file.match(/\.js$/) !== null) {
        var name = file.replace('.js', '');
        API[name] = require('./_api/' + file);
    }
});

module.exports = API;
