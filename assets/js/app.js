angular
  .module('githubUsers', [])
  .constant('API', "https://api.github.com/hub")
  .filter('startFrom', function() {
      return function(input, start) {
          start = +start; //parse to int
          return input.slice(start);

      }
  });