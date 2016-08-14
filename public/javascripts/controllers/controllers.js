app.controller('capstoneController', ['$scope', 'capstoneService', '$http', '$sce', function($scope, capstoneService, $http, $sce){
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
  $scope.view.hideEverything = function(){
    $scope.view.showRest = false;
    $scope.view.showMore = false;
    $scope.view.showPlans = false;
  };

  $scope.view.getTunes = function(bandName) {
    capstoneService.tunes(bandName).then(function(data){
      var spotifyLink = data.data.artists.items[0]["external_urls"]["spotify"];

      var spotifyButton = ('<iframe src="https://embed.spotify.com/?uri=' + spotifyLink + '" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
      $scope.view.info = $sce.trustAsHtml(spotifyButton);
    });
  }

}])

app.controller('secondaryController', ['$scope', '$http', function($scope, $http) {
  $scope.view = {};
  $scope.view.controls = "I'm from a controller"
}])
