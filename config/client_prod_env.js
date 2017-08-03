/**
 * Created by dchoi1 on 8/3/17.
 */

console.log("hey");
(function (window) {
    window.__env = window.__env || {};


console.log("hi");

    // if(process.env.ZONE === 'LOCAL')
    // {
        window.__env.clientEnv = 'LOCAL';
    // }
    // else if(process.env.ZONE === 'PROD') {
    //     window.__env.clientEnv = 'PROD';
    // }
}(this));