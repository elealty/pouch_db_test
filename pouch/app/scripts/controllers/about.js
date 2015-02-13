'use strict';

/**
 * @ngdoc function
 * @name pouchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pouchApp
 */
angular.module('pouchApp')
  .controller('AboutCtrl', function ($scope, database) {
        $scope.objects_list =database.all();
        console.log("$scope.objects_list:"+$scope.objects_list);
  });
