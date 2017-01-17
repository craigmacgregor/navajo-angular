/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* REQUIRES bower install pwstrength-bootstrap */

var app = angular.module('navcoinAngularApp');

app.directive('cmPwstrength', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
        
      ctrl.$validators.strength = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});