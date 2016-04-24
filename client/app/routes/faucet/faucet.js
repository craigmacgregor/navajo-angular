'use strict';

angular.module('navajoAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/faucet', {
        templateUrl: 'app/routes/faucet/faucet.html',
        controller: 'FaucetCtrl'
      });
  });