'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/services', {
        templateUrl: 'app/routes/services/services.html',
        controller: 'ServicesCtrl'
      });
  });
