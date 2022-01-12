app.controller('dashboardController', function($scope, $routeParams, $http,
		$window) {
	$scope.token = localStorage.getItem("token");
	if (localStorage.getItem("token") == null)
		$window.location.href = "#";

	$scope.logout = function() {
		localStorage.removeItem("token");
		$window.location.href = "#";
	}

});
