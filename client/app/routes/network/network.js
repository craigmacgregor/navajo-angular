'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/network', {
        templateUrl: 'app/routes/network/network.html',
        controller: 'NetworkCtrl'
      });
  });
