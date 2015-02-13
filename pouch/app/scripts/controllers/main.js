'use strict';

/**
 * @ngdoc function
 * @name pouchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pouchApp
 */
angular.module('pouchApp')
  .controller('MainCtrl', function ($scope,database) {
        console.log("main_controller");

        $scope.save = function() {
            console.log("order:"+$scope.order);
            database.add(angular.extend($scope.order,{'_id':''+Math.floor(Math.random()*100)}));
      };
  });
