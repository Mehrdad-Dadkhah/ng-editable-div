var app = angular.module('ngEditableDiv' , []);

var documentRoot = 'http://test.local/src/';

app.directive('editablediv', function($timeout) {
    return {
        templateUrl: documentRoot + 'editable_div.html',
        restrict: 'E',
        scope:{
            textarea: '@',
            input: '@',
            placeholder: '@'
        },
        controller: function($scope){
            $scope.focus = function(event){
                if($(event.target).html() == $scope.placeholder){
                    $(event.target).html('');
                }
            }

            $scope.blured = function(event){
                if($(event.target).html().length == 0){
                    $(event.target).html($scope.placeholder);
                }
            }

            $scope.changed = function(event){
                $scope.text = $(event.target).html();
            }
        }

    }
});