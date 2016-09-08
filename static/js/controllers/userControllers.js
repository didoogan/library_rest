app.controller("SignupCtrl", [ '$scope', 'Author','$routeParams','$location', '$window', '$http', function ($scope, Author, $routeParams, $location, $window, $http) {

    $scope.signUp = function() {
        console.log('Sign up, smile :)');
        // var data = {
        //     username: $scope.login,
        //     password: $scope.password
        // };

        // $http.post('/users/signup/', $.param({
        //     username: $scope.login,
        //     password: $scope.password
        // }),{
        //         headers : {
        //             'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        //         }
        //     })
        //     .success(function () {
        //         console.log('Ok');
        //     })
        //     .error(function () {
        //         console.log('error');
        //     });

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
            console.log('Ok');
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
            console.log("success");
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

