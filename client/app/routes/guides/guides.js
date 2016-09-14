'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/guides', {
        templateUrl: 'app/routes/guides/guides.html',
        controller: 'GuidesCtrl'
      });
  });
