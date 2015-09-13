/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('navajoAngularApp');

app.directive('cmForm', function(){
   
    return {
        restrict: 'A', 
        controller: function($scope, $rootScope){
            
            $rootScope.$on('resetForm', function(event, args){
                
                console.log('resetForm');
                                
                if($scope[args.name]){
                    
                    console.log('form found');

                    var inputs = angular.element("form[name='"+args.name+"']").find('input, select, textarea');
                    
                    console.log(inputs);
                    
                    $scope[args.name].$setPristine(true);
                    
                    angular.forEach(inputs, function(input){
                        var inputName = angular.element(input).attr('name');          
                        $scope[args.name][inputName].$error = {};
                        $scope[args.name][inputName].$setPristine(true);
                        $scope[args.name][inputName].$validate();
                    });
                                    
                }//if form found in scope
                else{
                    console.log('form NOT found');
                }
            });
                        
        },
        link: function(scope, elm, attrs, ctrl) {
                        
            var form = elm;
            var formName = form.attr('name');
            
            if (!formName)
                return;

            form.on('keyup', 'input, select, textarea', function(event) {
                
                scope.showSuccess = false;
                                
                scope.showErrors = !scope.checkAllFields();
                                
                scope.$digest();
                    
            });
            
            form.on('blur', 'input, select, textarea', function(event) {
                                
                angular.element(event.target).removeClass('ng-pristine');
                
                scope.showErrors = !scope.checkAllFields();
                
                scope.$digest();
                    
            });

            form.on('submit', function() {
                                                
                //remove pristine class
                elm.find('input, select, textarea').removeClass('ng-pristine');
                                                    
                scope.showErrors = !scope.checkAllFields();
                                
                scope.$digest();
                
                if(!scope.showErrors){
                    scope.submitForm();
                }                                          
                
            });
            
            scope.checkField = function(input){
                
                var fieldValid = true;
                
                var inputName = angular.element(input).attr('name');
                
                scope.$apply(function(){
                    scope[formName][inputName].$validate();
                    var errors = scope[formName][inputName].$error;
                    if(Object.keys(errors).length > 0){
                        fieldValid = false;
                    }
                    
                });
                
                
                return fieldValid;
                
            };
            
            scope.checkAllFields = function(){
                var $inputs = elm.find('input, select, textarea');
                var formValid = true;
                                
                $inputs.each(function(i, input){
                    
                    if(!angular.element(input)[0].attributes['cm-exclude']){
                                            
                        var inputName = angular.element(input).attr('name');

                        if(scope[formName][inputName]){
                            scope.$apply(function(){
                                    scope[formName][inputName].$validate();
                            });

                            var errors = scope[formName][inputName].$error;
                            if(Object.keys(errors).length > 0){
                                formValid = false;
                            }
                        }
                    }//!exclude
                });
    
                return formValid;
            };
        }
    };
    
});
