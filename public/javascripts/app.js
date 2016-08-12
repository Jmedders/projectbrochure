var app = angular.module('capstoneApp', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html',
      controller: 'capstoneController'
    })
    .when('/about', {
      templateUrl: '/views/about.html',
      controller: 'capstoneController'
    })
    .when('/dashboard', {
      templateUrl: 'views/personaldashboard.html',
      controller: 'capstoneController'
    })
})
