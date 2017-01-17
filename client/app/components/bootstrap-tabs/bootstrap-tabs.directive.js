'use strict';

angular.module('navcoinAngularApp')
  .directive('bootstrapTabs', function(){
    return {
       templateUrl: 'app/components/bootstrap-tabs/bootstrap-tabs.html',
       link: function(scope, elm, attrs, ctrl) {
           
           elm.on('click', 'a', function(event){
               
               event.preventDefault();
               
               scope.$apply(function(){
                    scope.activeTab = event.target.attributes['data-id'].value;
                });
               
           });
           
       },
       controller: function($scope){
           
            $scope.activeTab = 1;
            
       }
   };
});

