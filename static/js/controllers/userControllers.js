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
                password: $scope.password,
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

app.controller("SigninCtrl", [ '$scope', 'Author','$routeParams','$location', '$window', '$http',
                       function ($scope, Author, $routeParams, $location, $window, $http) {

    $scope.signIn = function() {
        console.log('Sign in, smile :)');
        console.log($scope.login);
        console.log($scope.password);
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
        };
    }]);
