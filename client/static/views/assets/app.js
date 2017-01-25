var myApp = angular.module('app', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/logreg.html',
		controller: 'logregController'
	})
	.when('/:userid/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'showController'
	})
	.when('/:userid/new', {
		templateUrl: 'partials/new.html',
		controller: 'newController'
	})
	.when('/:userid/show/:friendid', {
		templateUrl: 'partials/show.html',
		controller: 'showController'
	})
	.when('/:userid/edit/:friendid', {
		templateUrl: 'partials/edit.html',
		controller: 'editController'
	})
	.otherwise({
		redirectTo: '/'
	});
});
