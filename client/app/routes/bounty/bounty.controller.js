'use strict';

angular.module('navajoAngularApp')
  .controller('BountyCtrl', function ($scope, $http, $window, $q) {

        $scope.bitcoinAddress = '15SBFTamJqXMyGS6crRNVgWfCM5iehJhX9';
        $scope.navCoinAddress = 'NQH5nkBpxgjuEvqBRRbMJAKZB6UgVkwRNE';

        $scope.btcLoading = true;
        $scope.navLoading = true;
        $scope.navError = false;
        $scope.btcError = false;

        var bitcoinBalance = 'https://blockchain.info/q/addressbalance/' + $scope.bitcoinAddress;

        var promise1 = $http.get(bitcoinBalance);

        $q.all([promise1]).
            then(function(response) {
                $scope.bitcoinBalance = response[0].data / 100000000;
                $scope.btcLoading = false;
            }, function(response) {
                //error
                $scope.btcError = true;
                $scope.btcLoading = false;
        });

        var navBalance = "http://www.navcoin.org/api/get-nav-balance/address/" + $scope.navCoinAddress;

        var promiseN1 = $http.get(navBalance);

        $q.all([promiseN1]).
            then(function(response) {
              console.log(response);
                $scope.navBalance = response[0].data.data.balance;
                $scope.navLoading = false;
            }, function(response) {
                //error
                console.log(response);
                $scope.navError = true;
                $scope.navLoading = false;
        });

  });
