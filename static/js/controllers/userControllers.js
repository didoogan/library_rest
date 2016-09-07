app.controller("SignupCtrl", [ '$scope', 'Author','$routeParams','$location', '$window', '$http', function ($scope, Author, $routeParams, $location, $window, $http) {

    $scope.signUp = function() {
        console.log('Sign up, smile :)');
        // var data = {
        //     username: $scope.login,
        //     password: $scope.password
        // };

        $http.post('/users/signup/', $.param({
            username: $scope.login,
            password: $scope.password
        }),{
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            })
            .success(function () {
                console.log('Ok');
            })
            .error(function () {
                console.log('error');
            });
        };
    }]);
