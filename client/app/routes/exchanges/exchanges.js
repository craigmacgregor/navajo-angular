'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/exchanges', {
        templateUrl: 'app/routes/exchanges/exchanges.html',
        controller: 'ExchangesCtrl'
      });
  });