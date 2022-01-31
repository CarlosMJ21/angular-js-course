(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.inputText = '';
  $scope.splittedText = [];
  $scope.fontColour = '';
  $scope.borderBox = '';
  $scope.message = '';

  $scope.show = function(){
    $scope.splittedText = $scope.inputText.split(',');

    $scope.checkEmptyItems();
    var nList = $scope.splittedText.length;

    $scope.setMessage(nList);
    $scope.setColour(nList);
    $scope.setBox(nList);
  };

  $scope.checkEmptyItems = function() {

    var itemList = [];
    for (let item of $scope.splittedText) {

      if (item.trim() !== "") {
        itemList.push(item.trim());
      }
    }
    $scope.splittedText = itemList;
  }

  $scope.setMessage = function (nList){
    if (nList === 0){
      $scope.message = 'Please enter data first';
    } else {
      if (nList <= 3){
        $scope.message = 'Enjoy!';
      } else{
        $scope.message = 'Too much!';
      }
    }
  }

  $scope.setColour = function (nList){
    if (nList === 0) {
      $scope.fontColour = 'fontRed';
    } else {
      $scope.fontColour = 'fontGreen';
    }
  }

  $scope.setBox = function (nList){
    if (nList === 0) {
      $scope.borderBox = 'borderRed';
    } else {
      $scope.borderBox = 'borderGreen';
    }
  }
}

})();
