'use strict';

angular.module('navajoAngularApp')
  .controller('BountyCtrl', function ($scope, $http, $window, $q) {

        $scope.btcLoading = true;
        $scope.navLoading = true;
        $scope.navError = false;
        $scope.btcError = false;

        var bitcoinBalance = 'https://blockexplorer.com/api/addr/12o8h4VPB1X61USLikkL68VFuCn3kHZWyZ/balance';
        var bitcoinTReceived = 'https://blockexplorer.com/api/addr/12o8h4VPB1X61USLikkL68VFuCn3kHZWyZ/totalReceived';
        var bitcoinTSent = 'https://blockexplorer.com/api/addr/12o8h4VPB1X61USLikkL68VFuCn3kHZWyZ/totalSent';
        var bitcoinUnconfirmed = 'https://blockexplorer.com/api/addr/12o8h4VPB1X61USLikkL68VFuCn3kHZWyZ/unconfirmedBalance';

        var promise1 = $http.get(bitcoinBalance);
        var promise2 = $http.get(bitcoinTReceived);
        var promise3 = $http.get(bitcoinTSent);
        var promise4 = $http.get(bitcoinUnconfirmed);

        $q.all([promise1, promise2, promise3, promise4]).
            then(function(response) {
                $scope.bitcoinBalance = response[0].data / 100000000;
                $scope.bitcoinTReceived = response[1].data / 100000000;
                $scope.bitcoinTSent = response[2].data / 100000000;
                $scope.bitcoinUnconfirmed = response[3].data / 100000000;

                $scope.btcLoading = false;
            }, function(response) {
                //error
                $scope.btcError = true;
                $scope.btcLoading = false;
        });
        
        var navExplorer = 'http://www.navcoin.org/abe/address/sVKbj8DddwjQ3aSVUSd4ywdeaBdvfWVVen';

        if ($window.location.hostname === 'localhost') {
            navExplorer = '/explorer.html';
        }

        $http.get(navExplorer).
                then(function(response) {
                var explorerPage = angular.element(response.data);
                var shortlink = explorerPage.find('.shortlink');
                $scope.navDetails = shortlink.next().html();
                $scope.navLoading = false;
            }, function(response) {
                //error
                $scope.navError = true;
                $scope.navLoading = false;
        });
  });
