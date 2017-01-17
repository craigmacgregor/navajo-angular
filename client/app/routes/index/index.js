'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/routes/index/index.html',
        controller: 'IndexCtrl'
      });
  });