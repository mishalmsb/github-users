angular
  .module('githubUsers', ['ui.router'])
  .constant('API', "https://api.github.com/hub")
  .filter('startFrom', function() {
      return function(input, start) {
          start = +start;
          return input.slice(start);
      }
  });