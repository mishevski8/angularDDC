'use strict';
angular.module('angularDdcApp').factory('authService', function($http, $cookies) {
    var dataObj = {};
    var authentication = {
        isAuth: false,
        emailMissing: false
    }
    var baseUrl = 'http://test.drivedrivecar.com/api';
    /*login service*/
    dataObj.getToken = function(loginData) {
        var bodyData = {
            "grant_type": "password",
            "client_id": 2,
            "client_secret": "T5lTAyYdIRJUh21u2pbymCNqRmxGkjPWzXqvyDmX",
            "username": loginData.username,
            "password": loginData.password,
            "scope": "*"
        }
        console.log(bodyData.username);
        console.log(bodyData.password);
        if (bodyData.username === '') {
            authentication.emailMissing = true;
        }
        return $http.post(baseUrl + '/oauth/token', bodyData, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(function(response) {
            console.log(response);
            $cookies.putObject('token', response.data);
            authentication.isAuth = true;
        });
    }
    /*register service*/
    dataObj.saveRegistration = function(registration) {
        return $http.post(baseUrl + '/v1/users', registration, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(function(response) {
            return response;
        });
    }
    dataObj.authentication = authentication;
    return dataObj;
})