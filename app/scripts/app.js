'use strict';

var app = angular
  .module('patsCatsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/adopt', {
        templateUrl: 'views/adopt.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller:'MainCtrl'
      })
      .when('/donate', {
        templateUrl: 'views/donate.html',
        controller:'MainCtrl'
      })
      .when('/volunteer', {
        templateUrl: 'views/volunteer.html',
        controller: 'MainCtrl'
      })
      .when('/addCats', {
        templateUrl: 'views/addCats.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .constant('FIREBASE_URL', 'https://feralcatsolutions.firebaseio.com/');
