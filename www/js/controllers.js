angular.module('starter.controllers', [])

.controller('LoadingCtrl', function($scope, $ionicLoading, $rootScope) {

  $scope.$on('$ionicView.beforeEnter', function() {
    $rootScope.viewColor = 'black';
  }); 

  $scope.show = function() {
    $ionicLoading.show({
      template: '<ion-spinner icon="dots" class="spinner-energized"></ion-spinner>'
    });
  }

  $scope.hide = function() {
    $ionicLoading.hide();
  }

  $scope.stateRefresh = function() {
    stateFunction();
    $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.storeRefresh = function() {
    var state = document.getElementById("storeHeader").innerHTML;
    var state = state.slice(-2);
    storeFunction(state);
    $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.associateRefresh = function() {
    var store = document.getElementById("drawerHeader").innerHTML;
    var store = store.slice(-5);
    drawerFunction(store);
    $scope.$broadcast('scroll.refreshComplete');
  };

});


function loading() {
  var scope = angular.element(document.getElementById("divLoading")).scope();
  scope.$apply(function () {
    scope.show();
  });
}

function loadingComplete() {
  var scope = angular.element(document.getElementById("divLoading")).scope();
  scope.$apply(function () {
    scope.hide();
  });
}