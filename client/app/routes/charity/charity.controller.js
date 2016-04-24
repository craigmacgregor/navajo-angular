'use strict';

angular.module('navajoAngularApp')
  .controller('CharityCtrl', function ($scope, $http, $window, $q) {
      
        $scope.navLoading = true;
        $scope.navError = false;
        
        var navExplorer = 'http://www.navajocoin.org/abe/address/sRiAYMxKcqZWAcLbmsWB3oaQRcJVAsqzEZ';
        
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
