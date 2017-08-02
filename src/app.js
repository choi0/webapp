/**
 * Created by dchoi1 on 8/1/17.
 */
angular.module('angularbasic',['ngRoute'])
    .config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
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
            .otherwise({
                templateUrl : '/home/home.html',
                controller : 'HomeCtrl'
            });

    }]);