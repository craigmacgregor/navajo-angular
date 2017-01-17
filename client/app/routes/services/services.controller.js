'use strict';

angular.module('navcoinAngularApp')
  .controller('ServicesCtrl', function ($scope, $http, $window, $q, preloader) {

      $scope.loading = true;

      Prismic.api("http://navcoin.prismic.io/api", function(error, api) {
        var options = { pageSize: 100, orderings: '[my.services.priority desc]' };
        api.query(Prismic.Predicates.at('document.type', 'services'), options, function(error, response) {
          if (error) {
          } else {
            var data = formatServices(response.results);
            $scope.services = data.formatted;
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

      function formatServices(results) {
        var formatted = [];
        var images = [];
        angular.forEach(results, function(result){
          var temp = {
            name: result.getText('services.name'),
            type: result.getText('services.type'),
            url: result.getLink('services.url').value.url,
            logo: result.getImage('services.logo').url,
            priority: result.getNumber('services.priority'),
          }
          formatted.push(temp);
          images.push(temp.logo);
        });

        return { formatted: formatted, images: images };
      };
  });
