'use strict';

angular.module('navcoinAngularApp')
  .controller('SocialCtrl', function ($scope, $http, $window, $q, preloader, appConfig) {

      $scope.loading = true;

      Prismic.api("http://navcoin.prismic.io/api", function(error, api) {
        console.error(error, api);
        var options = { pageSize: 100, orderings: '[my.social.priority desc]' };
        api.query(Prismic.Predicates.at('document.type', 'social'), options, function(error, response) {
          if (error) {
            console.error('error', error);
          } else {
            console.error('response', response);
            var data = formatData(response.results);
            $scope.data = data.formatted;
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

      function formatData(results) {
        var formatted = [];
        var images = [];
        angular.forEach(results, function(result){
          var temp = {
            name: result.getText('social.name'),
            subtext: result.getText('social.subtext'),
            url: result.getLink('social.url').value.url,
            logo: result.getImage('social.logo').url,
            priority: result.getNumber('social.priority'),
          }
          formatted.push(temp);
          images.push(temp.logo)
        });
        return { formatted: formatted, images: images };
      };
  });
