'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/exchanges', {
        templateUrl: 'app/routes/exchanges/exchanges.html',
        controller: 'ExchangesCtrl'
      });
  });