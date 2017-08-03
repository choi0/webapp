/**
 * Created by dchoi1 on 8/1/17.
 */
var app = angular.module('angularbasic',
    [
        'ngRoute',
        'ngTouch',
        'ui.grid',
        'ui.grid.cellNav',
        'ui.grid.edit',
        'ui.grid.resizeColumns',
        'ui.grid.pinning',
        'ui.grid.selection',
        'ui.grid.moveColumns',
        'ui.grid.exporter',
        'ui.grid.importer', 
        'ui.grid.grouping'
    ]);


/*
constants
 */

var env = {};
if(window){
    Object.assign(env, window.__env);
}
app.constant('__env',env);

/*
routes
*/

    app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
        $locationProvider
            .html5Mode(true);

        // all routing here with html page and controller localhost:8080/___
        $routeProvider
            .when('/',{
                templateUrl : '/home/home.html',
                controller : 'HomeCtrl'
            })
            .when('/home',{
                templateUrl : '/home/home.html',
                controller : 'HomeCtrl'
            })
            .when('/grid',{
                templateUrl : '/grid/grid.html',
                controller : 'GridCtrl'
            })
            .otherwise({
                templateUrl : '/home/home.html',
                controller : 'HomeCtrl'
            });

    }]);