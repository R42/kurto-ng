'use strict';

angular.module('appApp')
  .controller('ShortenCtrl', ['$scope', 'Shorten',
                    function ( $scope ,  Shorten ) {
    $scope.url = {
      original: '',
      shortened: ''
    };

    $scope.shorten = function () {
      Shorten.save({ url: $scope.url.original }).$promise.then(function (response) {
        $scope.url.shortened = 'http://lolcathost:9000/shortens/' + response.token;
      });
    };
  }]);
