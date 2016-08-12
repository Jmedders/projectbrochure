app.controller('capstoneController', ['$scope', 'capstoneService', '$http', function($scope, capstoneService, $http){
  $scope.view = {};
  $scope.view.showPlans = false;
  $scope.view.showMore = false;
  $scope.view.showRest = false;
  $scope.view.change = function(){
    $scope.view.showPlans = true;
  };
  $scope.view.changeShowMore = function(){
    $scope.view.showMore = true;
  };
  $scope.view.changeShowRest = function(){
    $scope.view.showRest = true;
  };
}])
