angular
  .module('githubUsers')
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('users', {
        url: "/",
        templateUrl: "./assets/views/index.html",
      })
      .state('user', {
        url: "/user",
        templateUrl: "./assets/views/show.html",
      });
    $urlRouterProvider.otherwise("/");

  }