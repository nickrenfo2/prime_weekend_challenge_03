/**
 * Created by Nick on 9/25/15.
 */
var app = angular.module('app', []);
app.controller("IndexController", ['$scope', '$http', function($scope, $http) {
    $scope.students = [];
    $scope.curIndex = 0;
    $scope.shoutouts = [];
    $scope.prev = function(){
        console.log('prev');
        if($scope.curIndex==0) {
            $scope.curIndex=$scope.students.length-1;
        } else {
            $scope.curIndex--;
        }
    };
    $scope.next = function(){
        console.log('next');
        if($scope.curIndex==($scope.students.length-1)) {
            $scope.curIndex=0;
        } else {
            $scope.curIndex++;
        }
    };





    $http.get('/students').then(function(res) {
        $scope.students = res.data;
        console.log($scope.students);
        $http.get('/shoutouts').then(function (res) {
            $scope.shoutouts = res.data;
            console.log(res.data);
        });
    })
}]);