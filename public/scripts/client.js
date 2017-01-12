console.log('js');
var myApp = angular.module('myApp',['xeditable']);
myApp.controller('appController', ['$scope','$http',function($scope,$http){
  console.log('NG');
// $scope.words = {
//   hello:'hello',
//   world:'earth'
// };
// $scope.classes = {
//   collapse:true
// };
  // $scope.toggleDropdown = function(el){
  //   console.log('click works',el);
  //   el.classes.collapse = !el.classes.collapse;
  //
  // };//toggleDropdown


  $scope.getData = function(data){
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
