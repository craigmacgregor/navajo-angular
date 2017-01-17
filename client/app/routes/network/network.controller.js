'use strict';

angular.module('navcoinAngularApp')
  .controller('NetworkCtrl', function ($scope, $http, $window, $q, appConfig) {

      $scope.loadingServers = true;
      $scope.loadingHash = true;

      Prismic.api("http://navcoin.prismic.io/api", function(error, api) {
        var options = { pageSize: 100 };
        api.query(Prismic.Predicates.at('document.type', 'navtech_server'), options, function(error, response) {
          if (error) {
            console.error('error', error);
          } else {
            console.log(response)
            $scope.servers = formatServers(response.results);
            $scope.loadingServers = false;
            $scope.$applyAsync();
          }
        });
      });

      Prismic.api("http://navcoin.prismic.io/api", function(error, api) {
        var options = { pageSize: 100 };
        api.query(Prismic.Predicates.at('document.type', 'anonhash'), options, function(error, response) {
          if (error) {
            console.error('error', error);
          } else {
            $scope.anonhash = response.results[0].getText('anonhash.md5');
            $scope.loadingHash = false;
            $scope.$applyAsync();
          }
        });
      });

      function formatServers(results) {
        var formatted = [];
        angular.forEach(results, function(result){
          var temp = {
            address: result.getText('navtech_server.address'),
            status: result.getText('navtech_server.status'),
          }
          formatted.push(temp);
        });
        return formatted;
      };
  });
