'use strict';

angular.module('navcoinAngularApp')
  .controller('RichListCtrl', function ($scope, $http) {
      
      $scope.loading = true;
      
      $http.get('/richlist/richlist.txt').
        then(function(response) {

          var rows = response.data.split('\n');
                    
          $scope.list = [];
          
          for(var i=0; i< rows.length; i++){
              $scope.list.push(rows[i].split(" "));
          }
          
          $scope.loading = false;

        }, function(response) {
            //error
        });
      
  });
 


