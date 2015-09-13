'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/routes/index/index.html',
        controller: 'IndexCtrl'
      });
  });