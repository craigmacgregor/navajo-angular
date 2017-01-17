'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/faucet', {
        templateUrl: 'app/routes/faucet/faucet.html',
        controller: 'FaucetCtrl'
      });
  });