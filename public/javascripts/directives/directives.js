app.directive('coolDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/viewtodirective.html',
    controller: 'secondaryController'
  }
})
