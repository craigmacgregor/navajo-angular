'use strict';

angular.module('navcoinAngularApp')
  .controller('CharityCtrl', function ($scope, $http, $window, $q) {

        $scope.navLoading = true;
        $scope.navError = false;
        $scope.navCoinAddress = 'NfQJDyPrJ1DzyQQ29jQyewhS5qT3x3TMiG';

        var navBalance = "http://www.navcoin.org/api/get-nav-balance/address/" + $scope.navCoinAddress;

        var promiseN1 = $http.get(navBalance);

        $q.all([promiseN1]).
            then(function(response) {
                $scope.navBalance = response[0].data.data.balance;
                $scope.navLoading = false;
            }, function(response) {
                //error
                $scope.navError = true;
                $scope.navLoading = false;
        });

  });
