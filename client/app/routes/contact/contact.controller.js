'use strict';

angular.module('navajoAngularApp')
  .controller('ContactCtrl', function ($scope, $rootScope, $location, $http, $routeParams) {
   
    $scope.contact = {};
    
    $scope.success = $routeParams.success;
        
    $scope.resetForm = function(){
        $scope.contact = {};
        $scope.mailSent = false;
        $scope.$apply(function(){
            $location.path("contact");
        });
        
    };
      
    $scope.submitForm = function(){
        
        //@TODO: change to post when hitting real service
        $http.get('api/contact.json', $scope.contact).
        then(function(response) {

           if(response.data.response === "SUCCESS"){
               $location.path("contact/success");
           }

        }, function(response) {
            //error
        });
        
    };
        
  }).directive('contactReset', function () {
    return {
      link: function (scope, elm, attrs, ctrl) {
        
        elm.on('click', function (event) {
            scope.resetForm();
        });

      }
    };
  });
