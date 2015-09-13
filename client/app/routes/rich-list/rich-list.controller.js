'use strict';

angular.module('navajoAngularApp')
  .controller('RichListCtrl', function ($scope, $http) {
      
      $http.get('/richlist/richlist.txt').
        then(function(response) {

          var rows = response.data.split('\n');
                    
          $scope.list = [];
          
          for(var i=0; i< rows.length; i++){
              $scope.list.push(rows[i].split(" "));
          }

        }, function(response) {
            //error
        });
      
  });
 


