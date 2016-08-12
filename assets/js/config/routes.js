angular
  .module('githubUsers')
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
  function MainRouter($stateProvider, $urlRouterProvider) {
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