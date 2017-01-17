'use strict';

angular.module('navcoinAngularApp')
  .controller('BountyCtrl', function ($scope, $http, $window, $q, preloader, appConfig) {

      $scope.loading = true;

      Prismic.api("http://navcoin.prismic.io/api", function(error, api) {
        var options = { pageSize: 100, orderings: '[my.bounty.priority desc]' };
        api.query(Prismic.Predicates.at('document.type', 'bounty'), options, function(error, response) {
          if (error) {
            console.error('error', error);
            $scope.loading = false;
            $scope.$applyAsync();
          } else {
            $scope.data = formatData(response.results);
            console.log($scope.data)
            $scope.loading = false;
            $scope.$applyAsync();
          }
        });
      });

      function formatData(results) {
        var formatted = [];
        angular.forEach(results, function(result){
          var temp = {
            name: result.getText('bounty.name'),
            description: result.getStructuredText('bounty.description').asHtml(),
            terms: result.getStructuredText('bounty.terms').asHtml(),
            nav: result.getNumber('bounty.nav'),
            btc: result.getNumber('bounty.btc'),
            priority: result.getNumber('bounty.priority'),
          }
          formatted.push(temp);
        });
        return formatted;
      };
  });
