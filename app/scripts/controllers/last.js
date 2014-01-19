'use strict';

angular.module('appApp')
  .controller('LastCtrl', ['$scope', 'Shorten',
                 function ( $scope ,  Shorten  ) {
    $scope.lastURLs = [];

    Shorten.query().$promise.then(function (urls) {
      $scope.lastURLs = urls;
    });
  }]);
