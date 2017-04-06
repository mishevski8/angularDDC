'use strict';
/**
 * @ngdoc function
 * @name angularDdcApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularDdcApp
 */
angular.module('angularDdcApp').controller('LoginCtrl', function($http, authService, $location) {
    var vm = this;
    vm.errorMessage = false;
    vm.authenticated = authService.authentication;
    vm.user = {
        'username': '',
        'password': ''
    }
    /*vm.login = function() {
        authService.getToken(vm.user).then(onSuccess, onError);

        function onSuccess(data) {
            console.log(data);
            $location.path('/');
        }

        function onError(data) {
            console.log(data);
            vm.errorMessage = true;
        }
    }*/
    vm.login = function() {
        authService.getToken(vm.user).then(onSuccess, onError);

        function onSuccess(data) {
            $location.path('/');
        }

        function onError(data) {
            console.log(data);
            vm.errorMessage = true;
        }
    }
});