'use strict';

angular.module('navcoinAngularApp')
  .controller('DownloadsCtrl', function ($scope, $http, $routeParams, $anchorScroll, $location) {

    $scope.loading = true;

    $http.get('/api/downloads.json').
        then(function(response) {

         $scope.downloads = response.data;
         $scope.loading = false;
         setTimeout(function() {
           $anchorScroll();
         }, 100)


        }, function(response) {
            //error
        });

  });
