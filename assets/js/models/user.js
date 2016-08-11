angular
  .module('githubUsers')
  .factory('User', User);

User.$inject = ['$resource'];
function User($resource){
  url : "https://api.github.com/search/users?q=" + self.query
  return $resource(
    API+"https://api.github.com/", {id: '@id'},
    { 
      'search':       { method: 'GET' },
    }
  );
}
