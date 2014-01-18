'use strict';

angular.module('appApp')
  .factory('Shorten', ['$resource',
             function ( $resource ) {

    return $resource('/shortens');
  }]);
