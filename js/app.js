(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var todoApp =angular.module("todoApp",[]);
	todoApp.controller("todoController",["$scope",function($scope){
		$scope.arr=[
		{"name":"事件1","completed":false},
		{"name":"事件2","completed":true},
		{"name":"事件3","completed":false},
		{"name":"事件4","completed":true},
		{"name":"事件5","completed":true}
		];
		/*1.添加数据*/
		$scope.add=function(){
			$scope.arr.push({
				"id":Math.random(),
				"name":$scope.newItem,
				"completed":false
			});
			/*添加完成后清空输入框*/
			$scope.newItem="";
		};
/*2.删除数据*/
	$scope.delete=function($index){
		$scope.arr.splice($index,1);
	}
	}]);
})(angular);
