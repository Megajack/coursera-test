(function () {
  "use strict";

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.meal = "";

    $scope.checkMeal = function () {
      var splits = $scope.meal.split(",");
      if(splits.length <= 3) {
        $scope.msg = "Enjoy!";
        $scope.cls = "green";
      } else if (splits.length > 3) {
        $scope.msg = "Too much!";
        $scope.cls = "green";
      }
      if($scope.meal == "") {
        $scope.msg = "Please enter data first";
        $scope.cls = "red";
      }
    }
  }

})();
