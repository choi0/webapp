/**
 * Created by dchoi1 on 8/1/17.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

fs.readdirSync('./routes/_routes/').forEach(function (file) {
    if (file.match(/\.js$/) !== null) {
        var name = file.replace('.js', '');
        require('./_routes/' + file)(router);
    }
});

module.exports = router;