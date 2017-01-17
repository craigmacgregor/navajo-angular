'use strict';

angular.module('navcoinAngularApp')
  .controller('ToolsCtrl', function ($scope, $http, $window, $q, preloader) {

      $scope.loading = true;

      Prismic.api("http://navcoin.prismic.io/api", function(error, api) {
        var options = { pageSize: 100, orderings: '[my.tools.priority desc]' };
        api.query(Prismic.Predicates.at('document.type', 'tools'), options, function(error, response) {
          if (error) {
          } else {
            var data = formatTools(response.results);
            $scope.tools = data.formatted;
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

      function formatTools(results) {
        var formatted = [];
        var images = [];
        angular.forEach(results, function(result){
          var temp = {
            name: result.getText('tools.name'),
            type: result.getText('tools.type'),
            url: result.getLink('tools.url').value.url,
            logo: result.getImage('tools.logo').url,
            priority: result.getNumber('tools.priority'),
            isLocal: result.getLink('tools.url').value.url.indexOf('navcoin.org') !== -1,
          }
          formatted.push(temp);
          images.push(temp.logo);
        });

        return { formatted: formatted, images: images };
      };
  });
