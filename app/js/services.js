'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  factory('randomNumbers', function() {
  	var randomNumbersInstance;
    return {
      generateNumbers: function() {
        /*var list = [];
        var mega = Math.ceil(Math.random() * 15);

        while (list.length < 5) {
          var number = Math.ceil(Math.random() * 75);
          if (list.indexOf(number) == -1){
            list.push(number);
          }
        }
        list.sort(function(a, b){return a - b});*/

        randomNumbersInstance = {fiveNumbers: "Across", megaNumber: "The Sky"};
        return randomNumbersInstance;
        //$scope.list = list.sort(function(a, b){return a-b});
        //$scope.mega = Math.ceil(Math.random() * 15);
        //$scope.lotteryNumbers = {numbers: [1,2,3,4,5], mega: 6};
        
        }
     };
});
