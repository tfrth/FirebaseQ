var app = angular.module('parseQ', ['firebase']);

app
	.constant('constants', {
		"firebaseUrl": "https://brilliant-inferno-4121.firebaseio.com/"
	})

	
	// .config(function($httpProvider){
	//   $httpProvider.interceptors.push('httpRequestInterceptor');
	// });