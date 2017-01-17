/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//requires attribute data-match='name-of-field-to-match'

var app = angular.module('navcoinAngularApp');

app.directive('cmMatch', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
                        
        var formName = elm.parents('form').attr('name');
        
        var fieldToMatch = scope[formName][attrs.cmMatch];
                        
                
      ctrl.$validators.match = function(modelValue, viewValue) {
                    
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (fieldToMatch.$viewValue === modelValue) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});