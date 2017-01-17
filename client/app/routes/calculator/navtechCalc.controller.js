'use strict';

angular.module('navcoinAngularApp')
  .controller('NavtechCalcController', function ($scope, $rootScope, $location, $http, $routeParams) {

    $scope.calc = 'navtech';

    if ($routeParams.fee && $routeParams.amount) {
      var satoshiFactor = 100000000;
      var satoshiAmount = Math.ceil($routeParams.amount * satoshiFactor);
      $scope.totalSatoshi = satoshiAmount / (1 - ($routeParams.fee / 100));
      $scope.totalToSend = Math.ceil($scope.totalSatoshi) / satoshiFactor;
      $scope.totalFee = Math.ceil($scope.totalSatoshi - satoshiAmount) / satoshiFactor;
      $scope.navtech = { fee: $routeParams.fee, amount: $routeParams.amount };
    } else {
      $scope.navtech = { fee: 0.5 };
    }

    $scope.resetForm = function(){
        $scope.navtech = { fee: 0.5 };
        $scope.error = false;
        $scope.data = false;
        if ($scope.navtechForm.amount) $scope.navtechForm.amount.$error = {};
        if ($scope.navtechForm.fee) $scope.navtechForm.fee.$error = {};
        $scope.navtechForm.$setPristine();
        $location.url("/calculators/navtech");
        $scope.$apply();
    };

    $scope.submitForm = function(){

      $location.path("/calculators/navtech").search({
        amount: $scope.navtech.amount,
        fee: $scope.navtech.fee,
      });

      $scope.$apply();
      return;

    };

  }).directive('navtechReset', function () {
    return {
      link: function (scope, elm, attrs, ctrl) {

        elm.on('click', function (event) {
            scope.resetForm();
        });

      }
    };
  }).directive('navtechCalculate', function () {
    return {
      link: function (scope, elm, attrs, ctrl) {

        elm.on('submit', function (event) {
            scope.submitForm();
        });

      }
    };
  });
