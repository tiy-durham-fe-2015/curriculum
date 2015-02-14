
Goal: Ready for Pythonistas!

- routing
- views
- $watch
- $scope
- $http
	- promises
- filters
	- http://jsbin.com/xofeviwumo/1/edit?html,js,output
- ... directives?!?!
- Node


	$scope.$watch(function () {
		// Called multiple times per digest
		// This is annoyink!!!
    return self.prop;
  }, function (value){
		// Called only if self.prop changed
    console.log(value);
  });
