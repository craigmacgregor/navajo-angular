/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('navajoAngularApp');

app.directive('cmNotempty', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl, signupModel) {
      ctrl.$validators.notempty = function(modelValue, viewValue) {
        
        if(attrs.cmCondition === 'false'){
            return true;
        }        
        
        if ((ctrl.$isEmpty(modelValue) || modelValue === null) && !elm.hasClass('ng-pristine')) {
            return false;
        }else{
            return true;
        }
      };
    }
  };
});