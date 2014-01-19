'use strict';

angular.module('appApp')
  .controller('MainCtrl', function ($scope) {
    $scope.menu = [
      { link: '#'     , label: 'Home' },
      { link: '#/last', label: 'Last' }
    ];

    $scope.currentPage = 'Home';

    $scope.$on('changePage', function ($event, page) {
      $scope.currentPage = page;
    });
  });
