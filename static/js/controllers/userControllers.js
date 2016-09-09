app.controller("SignupCtrl", [ '$scope', 'Author','$routeParams','$location', '$window', '$http', 'localStorageService',
    function ($scope, Author, $routeParams, $location, $window, $http, localStorageService) {

    $scope.signUp = function() {
        $http({
            method: 'POST',
            url: '/users/signup/',
            data: {
                username: $scope.login,
                password: $scope.password
                // is_librarian: false
            }
        })
        .then(function successCallback(response) {
            if(response.data.error) {
                $scope.error = response.data.error;
                return;
            }
            localStorageService.set('token', response.data.token);
            $scope.username = response.data.user;
            console.log(response.data.user);
            localStorageService.set('user', $scope.username);
            $window.location.href = '#authorsapp';
            $window.location.reload();
        }
        , function errorCallback(response) {
            console.log('error');

        });
    };
}]);

app.controller("NavbarCtrl", [ '$scope', 'Author','$routeParams','$location', '$window', '$http', 'localStorageService',
                       function ($scope, Author, $routeParams, $location, $window, $http, localStorageService) {
    $scope.username = localStorageService.get('user');

    $scope.logOut = function() {
        localStorageService.clearAll();
        $window.location.reload();
        $scope.username = false;
    };

    $scope.signIn = function() {
        $http({
            method: 'POST',
            url: '/users/signin/',
            data: {
                username: $scope.login,
                password: $scope.password
            }
        })
        .then(function successCallback(response) {
            if(response.data.error) {
                $scope.error = response.data.error;
                return;
            }
            localStorageService.set('token', response.data.token);
            $scope.username = response.data.user;
            console.log(response.data.user);
            localStorageService.set('user', $scope.username);
            $window.location.reload();
        }
        , function errorCallback(response) {
            console.log('error');

        });
    };
}]);

