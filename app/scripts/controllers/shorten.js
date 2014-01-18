'use strict';

angular.module('appApp')
  .controller('ShortenCtrl', function ($scope) {
    $scope.url = {
      original: '',
      shortened: ''
    };

    $scope.shorten = function () {
      $scope.url.shortened = $scope.url.original;
    };
  });
