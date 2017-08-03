/**
 * Created by dchoi1 on 8/3/17.
 */
var env = process.env.ZONE || 'LOCAL';

var config = {
    hardcoded: '1',
    envvar: process.env.ENVVAR
};

if(env === 'LOCAL') {
    //UAT or TEST
    config.hardcoded = '5';
    console.log("YOU ARE ON SERVER LOCAL");
} else if(env === 'PROD') {
    //UAT or TEST
    config.hardcoded = '6';
    console.log("YOU ARE ON SERVER PROD");
}
