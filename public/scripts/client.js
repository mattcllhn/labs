console.log('js');
var myApp = angular.module('myApp',[]);
myApp.controller('mockController', ['$scope','$http',function($scope,$http){
  console.log('NG');
$scope.words = {
  hello:'hello',
  world:'earth'
};
$scope.classes = {
  collapse:true
};
  $scope.toggleDropdown = function(el){
    console.log('click works',el);
    el.classes.collapse = !el.classes.collapse;

  };//toggleDropdown


  $scope.getData = function(){
    $http({
      method:'GET',
      url:'/jsonData'
    }).then(function(data){
      console.log(data);
    });
  };

  
  $scope.fsTest = function(){
    var objToSend = {
    id:1,
    otherThing:'is a string',
    lastThing:true
    };
    $http({
      method:'POST',
      url:'/test',
      data:objToSend
    }).then(function(data){
      console.log(data);
    });
  };


}])//mockController
.directive('myWords', function(){
  return{
    restrict: 'E',
    templateUrl:'./views/directives/words.html',
    replace : true

  };

});//mywords
