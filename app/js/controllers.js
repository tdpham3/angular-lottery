'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'randomNumber', function($scope, randomNumber) {
  	
  	$scope.generateList = function(){
  		var list = [];

        while (list.length < 5) {
          var number = Math.ceil(Math.random() * 75);
          if (list.indexOf(number) == -1){
            list.push(number);
          }
        }

      var result = randomNumber.generateNumbers();
      $scope.list = result.numbers;
      $scope.mega = result.megaNumber;

  	}
    
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .factory('randomNumber', function() {
    
    return {
      generateNumbers: function() {
        var list = [];
        var mega = Math.ceil(Math.random() * 15);

        while (list.length < 5) {
          var number = Math.ceil(Math.random() * 75);
          if (list.indexOf(number) == -1){
            list.push(number);
          }
        }
        list.sort(function(a, b){return a - b});
        return {numbers: list, megaNumber: mega};   
        }
     };
});
