'use strict';

angular.module('navcoinAngularApp')
  .controller('ContactCtrl', function ($scope, $rootScope, $location, $http, $routeParams) {

    $scope.contact = {};
    $scope.error = false;
    $scope.success = $routeParams.success;

    $scope.resetForm = function(){
        $scope.contact = {};
        $scope.mailSent = false;
        $scope.$apply(function(){
            $location.path("contact");
        });

    };

    $scope.submitForm = function(){
        $scope.error = false;
        var req = {
            method: "post",
            url: "/api/send-contact-form",
            header: "application/json"
        };

        $http(req)
          .then(function(response){
            if(response.data.response === "SUCCESS"){
               $location.path("contact/success");
           }else{
               $scope.error = true;
           }
        },function(err){
            $scope.error = true;
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
