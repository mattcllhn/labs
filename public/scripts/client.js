console.log('js');
var myApp = angular.module('myApp',[]);
myApp.controller('mockController', ['$scope',function($scope){
  console.log('NG');
$scope.words = {
  hello:'hello',
  world:'earth'
};
  $scope.toggleDropdown = function(el){
    // console.log('click works',el);
    // el.toggleClass('green');

  };//toggleDropdown



}])//mockController
.directive('myWords', function(){
  return{
    restrict: 'E',
    templateUrl:'./partials/words.html'
//     link: function(scope, element, attrs) {
//   scope.config = config;
// }
  };

});//mywords
