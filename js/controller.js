angular.module('myApp', ['vntInformation', 'ngMaterial'])

.controller('myCtrl', function($scope){
    $scope.players = [];
    $scope.playerDetails = {
        name: 'Sachin',
        age: 35
    };
    $scope.players.push($scope.playerDetails);
    $scope.players.push($scope.playerDetails);
    $scope.players.push($scope.playerDetails);
    $scope.players.push($scope.playerDetails);
    $scope.players.push($scope.playerDetails);
    $scope.players.push($scope.playerDetails);
    $scope.players.push($scope.playerDetails);
    $scope.players.push($scope.playerDetails);
    $scope.players.push($scope.playerDetails);

});