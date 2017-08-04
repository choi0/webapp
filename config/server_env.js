/**
 * Created by dchoi1 on 8/3/17.
 */
var env = process.env.ZONE || 'LOCAL';

var config = {
    hardcoded: '1',
    envvar: process.env.ENVVAR,
    db_url: 'localhost:27017/local',
    db_user: '',
    db_pass: ''
};

if(env === 'LOCAL') {
    //UAT or TEST
    config.hardcoded = '5';
    console.log("YOU ARE ON SERVER LOCAL");
} else if(env === 'WORK') {
    //UAT or TEST
    config.hardcoded = '6';
    console.log("YOU ARE ON SERVER WORK");
    config.db_user = 'admin';
    config.db_pass = 'sdLdn104xFk7HFQQ';
} else if(env === 'HOME') {
    //UAT or TEST
    config.hardcoded = '6';
    console.log("YOU ARE ON SERVER HOME");
    config.db_user = 'admin';
    config.db_pass = 'IuOdXDd7FWMI5mVB';
}

module.exports = config;