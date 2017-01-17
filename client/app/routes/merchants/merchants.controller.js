'use strict';

angular.module('navcoinAngularApp')
  .controller('MerchantsCtrl', function ($scope, $http, $window, $q, preloader, appConfig) {

      $scope.loading = true;

      Prismic.api("http://navcoin.prismic.io/api", function(error, api) {
        console.error(error, api);
        var options = { pageSize: 100, orderings: '[my.merchant.priority desc]' };
        api.query(Prismic.Predicates.at('document.type', 'merchant'), options, function(error, response) {
          if (error) {
            console.error('error', error);
          } else {
            console.error('response', response);
            var data = formatMerchants(response.results);
            $scope.merchants = data.formatted;
            preloader.preloadImages( data.images )
              .then(function() {
                  // Loading was successful.
                  $scope.loading = false;
                  $scope.$applyAsync();
              },
              function() {
                  // Loading failed on at least one image.
                  console.error('failed to load an image');
                  $scope.loading = false;
                  $scope.$applyAsync();
              });
          }
        });
      });

      function formatMerchants(results) {
        var formatted = [];
        var images = [];
        angular.forEach(results, function(result){
          var temp = {
            name: result.getText('merchant.name'),
            type: result.getText('merchant.type'),
            url: result.getLink('merchant.url').value.url,
            logo: result.getImage('merchant.logo').url,
            priority: result.getNumber('merchant.priority'),
          }
          formatted.push(temp);
          images.push(temp.logo)
        });
        return { formatted: formatted, images: images };
      };
  });
