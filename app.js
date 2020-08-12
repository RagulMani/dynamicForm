
var app = angular.module("dynamicForm", []);

app.controller("formController", function ($scope) {

    $scope.options = [{ id: 'option1', name: 'option1' }, { id: 'option2', name: 'option2' }, { id: 'option3', name: 'option3' }];

    $scope.addNewOption = function () {
        var newItemNo = $scope.options.length + 1;
        $scope.options.push({ 'id': 'option' + newItemNo, 'name': 'option' + newItemNo });
    };

    $scope.removeNewOption = function () {
        var newItemNo = $scope.options.length - 1;
        if (newItemNo !== 0) {
            $scope.options.pop();
        }
    };

    $scope.showAddOption = function (option) {
        return option.id === $scope.options[$scope.options.length - 1].id;
    };
    
    $scope.hideRemoveOption = function(option){
        
    }

 

});