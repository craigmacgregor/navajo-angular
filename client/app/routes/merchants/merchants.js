'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/merchants', {
        templateUrl: 'app/routes/merchants/merchants.html',
        controller: 'MerchantsCtrl'
      });
  });
