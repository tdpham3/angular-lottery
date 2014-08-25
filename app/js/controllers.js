'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'randomNumber', function($scope, randomNumber) {
  	
  	$scope.generateList = function(){

      var result = randomNumber.generateNumbers(75,15);
      $scope.list = result.numbers;
      $scope.mega = result.megaNumber;

  	}
    
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .factory('randomNumber', function() {
    
    return {
      generateNumbers: function(numbersMax, megaMax) {
        var list = [];
        var mega = Math.ceil(Math.random() * megaMax);

        while (list.length < 5) {
          var number = Math.ceil(Math.random() * numbersMax);
          if (list.indexOf(number) == -1){
            list.push(number);
          }
        }
        list.sort(function(a, b){return a - b});
        return {numbers: list, megaNumber: mega};   
        }
     };
});
