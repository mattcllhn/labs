console.log('js');
var myApp = angular.module('myApp',['xeditable']);
myApp.controller('appController', ['$scope','$http',function($scope,$http){
  console.log('NG');
  $scope.edit=true;


  $scope.update = function(){
    console.log('the thing has been changed :\n', $scope.lesson);
  var objToSend = {
      lesson:$scope.lesson,
      ex:$scope.currentEx
  };
    $http({
      method:'PUT',
      url:'/jsonUpdate',
      data:objToSend
    }).then(function(data){
      console.log('success',data);
    });
  };


  $scope.getData = function(data){
    $scope.currentEx = data || 'ex1';
    console.log($scope.currentEx);
    var params = {param:data};
    $http({
      method:'GET',
      url:'/jsonData',
      params:params
    }).then(function(data){
      // console.log(data);
      $scope.lesson = data.data;
      // console.log($scope.lesson);
    });
  };



$scope.getData();
}]);//appController

myApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
