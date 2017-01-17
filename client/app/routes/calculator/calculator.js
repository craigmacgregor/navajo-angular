'use strict';

angular.module('navcoinAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/calculators', {
        templateUrl: 'app/routes/calculator/calculator.html',
        controller: 'CalculatorCtrl'
      })
      .when('/calculators/fiat', {
        templateUrl: 'app/routes/calculator/calculator.html',
        controller: 'CalculatorCtrl'
      })
      .when('/calculators/fiat/:fiat/:amount', {
        templateUrl: 'app/routes/calculator/calculator.html',
        controller: 'CalculatorCtrl'
      })
      .when('/calculators/fiat/:fiat/:amount/:address', {
        templateUrl: 'app/routes/calculator/calculator.html',
        controller: 'CalculatorCtrl'
      })
      .when('/calculators/navtech', {
        templateUrl: 'app/routes/calculator/calculator.html',
        controller: 'NavtechCalcController'
      })
      .when('/calculators/navtech/:amount/:percent', {
        templateUrl: 'app/routes/calculator/calculator.html',
        controller: 'NavtechCalcController'
      });
  });
