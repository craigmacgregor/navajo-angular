'use strict';

angular.module('navcoinAngularApp')
  .directive('loadingAnimation', function(){
    return {
       templateUrl: "app/components/loader/loader.html"
   };
});