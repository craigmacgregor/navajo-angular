'use strict';

angular.module('navcoinAngularApp')
  .controller('CalculatorCtrl', function ($scope, $rootScope, $location, $http, $routeParams) {

    $scope.calc = 'fiat';

    if ($routeParams.fiat && $routeParams.amount) {
      $scope.error = false;
      $scope.loading = true;
      $scope.calculator = {};
      $scope.calculator.currency = $routeParams.fiat;
      $scope.calculator.amount = $routeParams.amount;
      $scope.calculator.address = $routeParams.address;
      var req = {
          method: "get",
          url: "http://www.navcoin.org/Navigator/",
          header: "application/json",
          params: {
            fiat: $routeParams.fiat,
            amount: $routeParams.amount,
            address: $routeParams.address
          }
        };

        $http(req)
          .then(function(response){
            $scope.loading = false;
            if (response.status === 200 && response.statusText === "OK") {
              if (response.data["fiat-amount"] === 0) {
                $scope.data = false;
                $scope.error = true;
              } else {
                $scope.data = response.data;
              }
            } else {
              $scope.data = false;
              $scope.error = true;
            }
        },function(err){
            $scope.error = true;
        });
    }

    $scope.resetForm = function(){
        $scope.calculator = {};
        $scope.error = false;
        $scope.data = false;
        if ($scope.calculatorForm.currency) $scope.calculatorForm.currency.$error = {}
        if ($scope.calculatorForm.amount) $scope.calculatorForm.amount.$error = {}
        if ($scope.calculatorForm.address) $scope.calculatorForm.address.$error = {}
        $scope.calculatorForm.$setPristine();
        $location.url("/calculators/fiat");
        $scope.$apply();
    };

    $scope.submitForm = function(){
      if (!$scope.calculator || !$scope.calculator.currency) {
        if (!$scope.calculatorForm.currency) {
          $scope.calculatorForm.currency = { $error: { notempty: true } }
        } else {
          $scope.calculatorForm.currency.$error = { notempty: true }
        }
        $scope.$apply();
        return;
      }

      if ($scope.calculatorForm && !$scope.calculatorForm.currency) {
        $scope.calculatorForm.currency = { $error: { notempty: false } }
      } else if ($scope.calculatorForm && $scope.calculatorForm.currency && !$scope.calculatorForm.currency.$error) {
        $scope.calculatorForm.currency.$error = { notempty: false }
      }

      if ($scope.calculator.address) {
        $location.path("/calculators/fiat").search({
          fiat: $scope.calculator.currency,
          amount: $scope.calculator.amount,
          address: $scope.calculator.address,
        });
      } else {
        $location.path("/calculators/fiat").search({
          fiat: $scope.calculator.currency,
          amount: $scope.calculator.amount,
        });
      }
      $scope.$apply();
      return;

    };

  }).directive('calculatorReset', function () {
    return {
      link: function (scope, elm, attrs, ctrl) {

        elm.on('click', function (event) {
            scope.resetForm();
        });

      }
    };
  }).directive('calculatorCalculate', function () {
    return {
      link: function (scope, elm, attrs, ctrl) {

        elm.on('submit', function (event) {
            scope.submitForm();
        });

      }
    };
  });
