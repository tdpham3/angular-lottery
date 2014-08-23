'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.cool = "Peter Quill";
  	$scope.generateList = function(){
  		$scope.cool = "Gamora";
  		var list = [];

        while (list.length < 5) {
          var number = Math.ceil(Math.random() * 75);
          if (list.indexOf(number) == -1){
            list.push(number);
          }
        }

        $scope.list = list.sort(function(a, b){return a-b});
        $scope.mega = Math.ceil(Math.random() * 15);
  	}
    /*$scope.generateList = function(){
    var list = [];

    while (list.length < 5)
    {
      var number = Math.ceil(Math.random() * 75);
      if (list.indexOf(number) == -1){
        list.push(number);
      }
    }

    $scope.list = list.sort(function(a, b){return a-b});
    $scope.mega = Math.ceil(Math.random() * 15);*/
    //$scope.lotteryNumbers = {numbers: [1,2,3,4,5], mega: 6};
    //}
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
