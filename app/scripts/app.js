'use strict';

angular.module('appApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ShortenCtrl'
      })
      .when('/last', {
        templateUrl: 'views/last.html',
        controller: 'LastCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
