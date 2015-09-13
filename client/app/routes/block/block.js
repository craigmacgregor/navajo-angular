'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/block-explorer', {
        templateUrl: 'app/routes/block/block.html',
        controller: 'BlockCtrl'
      });
  });