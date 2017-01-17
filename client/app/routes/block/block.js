'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/block-explorer', {
        templateUrl: 'app/routes/block/block.html',
        controller: 'BlockCtrl'
      });
  });