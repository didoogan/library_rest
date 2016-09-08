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
            $scope.error = response.data.error;
            $scope.token = response.data.token;
            $scope.user = response.data.user;
            localStorageService.set('token', $scope.token);
            localStorageService.set('user', $scope.token);

        }
        , function errorCallback(response) {
            console.log('error');

        });
    };
}]);
