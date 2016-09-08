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

app.controller("SigninCtrl", [ '$scope', 'Author','$routeParams','$location', '$window', '$http', 'localStorageService',
                       function ($scope, Author, $routeParams, $location, $window, $http, localStorageService) {
    $scope.var = 'Var';
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
            localStorageService.set('user', response.data.user);
            $window.location.reload();
        }
        , function errorCallback(response) {
            console.log('error');

        });
    };
}]);

app.controller("LogoutCtrl", [ '$scope', 'Author','$routeParams','$location', '$window', '$http', 'localStorageService',
                       function ($scope, Author, $routeParams, $location, $window, $http, localStorageService) {
    $scope.logOut = function() {
        localStorageService.set('token', false);
        localStorageService.set('user', false);
        $window.location.reload();
    }
}]);
