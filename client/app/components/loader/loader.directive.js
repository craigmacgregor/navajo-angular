'use strict';

angular.module('navajoAngularApp')
  .directive('loadingAnimation', function(){
    return {
       templateUrl: "app/components/loader/loader.html"
   };
});