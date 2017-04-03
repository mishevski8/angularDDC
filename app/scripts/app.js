'use strict';
/**
 * @ngdoc overview
 * @name angularDdcApp
 * @description
 * # angularDdcApp
 *
 * Main module of the application.
 */
angular.module('angularDdcApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngTouch']).config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
    }).otherwise({
        redirectTo: '/'
    });
    $locationProvider.hashPrefix('');
});