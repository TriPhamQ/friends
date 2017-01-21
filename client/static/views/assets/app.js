var myApp = angular.module('app', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/index.html',
		controller: 'indexController'
	})
	.when('/new', {
		templateUrl: 'partials/new.html',
		controller: 'newController'
	})
	.when('/show/:friendid', {
		templateUrl: 'partials/show.html',
		controller: 'showController'
	})
	.when('/edit/:friendid', {
		templateUrl: 'partials/edit.html',
		controller: 'editController'
	})
	.otherwise({
		redirectTo: '/'
	});
});
