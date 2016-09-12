var app = angular.module('myApp', ['ngRoute', 'ngResource', 'LocalStorageModule']);

// ROUTES
app.config(function($routeProvider, $resourceProvider, $httpProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    $routeProvider

    .when('/booksapp', {
        templateUrl: 'static/pages/books/books.html',
        controller: 'BookList'
    })
    .when('/booksapp/create', {
        templateUrl: 'static/pages/books/bookCreate.html',
        controller: 'BookCreateCtrl'
    })

    .when('/booksapp/:id', {
        templateUrl: 'static/pages/books/bookDetail.html',
        controller: 'BookDetail'
    })
    .when('/booksapp/:id/update', {
    templateUrl: 'static/pages/books/bookUpdate.html',
    controller: 'BookUpdateCtrl'
    })


    .when('/authorsapp', {
        templateUrl: 'static/pages/authors/authors.html',
        controller: 'AuthorList'
    })
    .when('/authorsapp/create', {
    templateUrl: 'static/pages/authors/authorCreate.html',
    controller: 'AuthorCreateCtrl'
    })
    .when('/authorsapp/:id', {
        templateUrl: 'static/pages/authors/authorDetail.html',
        controller: 'AuthorDetail'
    })
    .when('/users/:id/update', {
    templateUrl: 'static/pages/authors/authorUpdate.html',
    controller: 'AuthorUpdateCtrl'
    })

    .when('/authorsapp/:id/update', {
    templateUrl: 'static/pages/authors/authorUpdate.html',
    controller: 'AuthorUpdateCtrl'
    })
    .when('/usersapp/signup', {
        templateUrl: 'static/pages/users/signup.html',
        controller: 'SignupCtrl'
        })
    .when('/cardsapp/', {
        templateUrl: 'static/pages/cards/cards.html',
        controller: 'CardListCtrl'
        })
    .when('/cardsapp/isnottakenbooks', {
    templateUrl: 'static/pages/cards/cardCreate.html',
    controller: 'IsNotTakenBooksCtrl'
    })
    .when('/cardsapp/update', {
    templateUrl: 'static/pages/cards/cardUpdate.html',
    controller: 'CardUpdateCtrl'
    })


    // .when('/cardsapp/create', {
    //     templateUrl: 'static/pages/cards/cards.html',
    //     controller: 'CardCreateCtrl'
    //     })

});

app.run(['$http', function($http) {
    // $http.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem("ls.token").slice(1, localStorage.getItem("ls.token").length-1);
    console.log(localStorage.getItem("is.tolen"));
    if(localStorage.getItem("ls.token" ) && localStorage.getItem("ls.token" ) != 'null') {
        $http.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem("ls.token").slice(1, localStorage.getItem("ls.token").length-1);
    }
}]);

