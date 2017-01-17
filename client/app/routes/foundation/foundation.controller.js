'use strict';

angular.module('navcoinAngularApp')
  .controller('FoundationCtrl', function ($scope, $http, preloader) {

   $scope.loading = true;

   Prismic.api("http://navcoin.prismic.io/api", function(error, api) {
     var options = { pageSize: 100, orderings: '[my.foundation.priority desc]' };
     api.query(Prismic.Predicates.at('document.type', 'foundation'), options, function(error, response) {
       if (error) {
       } else {
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
     var formatted = {
       core: [],
       ambassador: [],
       community: [],
       supporter: [],
     };
     var images = [];
     angular.forEach(results, function(result){
       var temp = {
         name: result.getText('foundation.name'),
         alias: result.getText('foundation.alias'),
         role: result.getText('foundation.role'),
         profile: result.getLink('foundation.profile').value.url,
         photo: result.getImage('foundation.photo') && result.getImage('foundation.photo').url,
         type: result.getText('foundation.type'),
         priority: result.getNumber('foundation.priority'),
       }
       if (temp.photo) images.push(temp.photo);
       switch (temp.type) {
         case 'core':
           formatted.core.push(temp);
           break;
         case 'ambassador':
           formatted.ambassador.push(temp);
           break;
         case 'community':
            formatted.community.push(temp);
            break;
         case 'supporter':
            formatted.supporter.push(temp);
            break;
       }
     });
     formatted.core = _.orderBy(formatted.core, 'priority', 'desc');
     formatted.ambassador = _.orderBy(formatted.ambassador, 'priority', 'desc');
     formatted.community = _.orderBy(formatted.community, 'priority', 'desc');
     formatted.supporter = _.orderBy(formatted.supporter, 'priority', 'desc');
     formatted = _.omitBy(formatted, function(item) {
       return item.length === 0
     })
     return { formatted: formatted, images: images };
   }

  });
