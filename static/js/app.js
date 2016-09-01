var app = angular.module('myApp', ['ngRoute', 'ngResource']);

// ROUTES
app.config(function($routeProvider) {
    $routeProvider

    .when('/booksapp', {
        templateUrl: 'static/pages/books/books.html',
        controller: 'BookList'
    })
    .when('/booksapp/:id', {
        templateUrl: 'static/pages/books/bookDetail.html',
        controller: 'BookDetail'
    })
    .when('/authorsapp', {
        templateUrl: 'static/pages/authors/authors.html',
        controller: 'AuthorList'
    })
    .when('/authorsapp/:id', {
        templateUrl: 'static/pages/authors/authorDetail.html',
        controller: 'AuthorDetail'
    })
});

// SERVICES


// CONTROLLERS
