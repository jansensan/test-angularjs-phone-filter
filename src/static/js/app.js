angular.module('page', [])

.filter('northAmericanPhoneNumber', function () {
  return function (input) {
    var output = '';

    var numbers = input.match(/(\d)/g);
    if (numbers) {
      var i = 0;
      var numNumbers = numbers.length;
      if (numNumbers > 10) {
        numNumbers = 10;
      }
      for (i; i < numNumbers; i++) {
        if (i === 3 || i === 6) {
          output += '-';
        }
        output += numbers[i];
      }
    }

    return output;
  };
})

.controller('pageController', function ($scope) {
  $scope.phone = '';
})