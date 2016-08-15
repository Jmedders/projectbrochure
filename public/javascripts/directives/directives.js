app.directive('coolDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/viewtodirective.html',
    controller: 'secondaryController'
  }
})
app.directive('anotherDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/anotherdirective.html',
    scope: {
      kid: '='
    }
  }
})
