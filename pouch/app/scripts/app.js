'use strict';

/**
 * @ngdoc overview
 * @name pouchApp
 * @description
 * # pouchApp
 *
 * Main module of the application.
 */
var pouchApp = angular
  .module('pouchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pouchdb'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

pouchApp.run(function($rootScope, pouchdb){
    console.log("CREATE DB");
    var db = pouchdb.create('pouch_ele');

});
