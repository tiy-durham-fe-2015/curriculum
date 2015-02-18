
Goal: Ready for Pythonistas!

## Angular reading:

https://docs.angularjs.org/guide/introduction

Style guides:

https://github.com/mgechev/angularjs-style-guide#controllers

Coding challenges:

http://coderbyte.com/CodingArea/Challenges/#easyChals

## Library vs Framework

Library: utility objects/functions that your code calls

Framework: an application infrastructure that calls your code
whenever it needs something... You just fill in the details.

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

I don't know if I'll remember to mention it in class, but Angular doesn't play
nice with setTimeout. If you want to do setTimeout (e.g. to get the clock
  working). Then, you need to look into using this:

https://docs.angularjs.org/api/ng/service/$timeout

I just saved you hours of headache. You're welcome. :)
