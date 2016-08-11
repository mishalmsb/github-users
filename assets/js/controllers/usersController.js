angular
  .module('githubUsers')
  .controller('UsersController', UsersController);


UsersController.$inject = ['$http'];
function UsersController($http){

  var self            = this;
  self.all            = [];
  self.query          = "mishal";
  self.img            = "";
  self.pege           = 1;
  self.totalPages     = 0;

  self.searchUsers = function() {
      $http({
          method : "GET",
          url : "https://api.github.com/search/users?q=" + self.query + "&page="+ self.pege +"&per_page=20" 
       }).then(function mySucces(response) {
          self.all = response.data.items;
          self.totalPages = Math.ceil(response.data.total_count / 20);
          console.log(response);
       }, function myError(response) {
          console.log(response);
       });
  }

  self.changePage = function() {
      $http({
          method : "GET",
          url : "https://api.github.com/search/users?q=" + self.query + "&page="+ self.pege +"&per_page=20" 
       }).then(function mySucces(response) {
          self.all = response.data.items;
          self.totalPages = Math.ceil(response.data.total_count / 20);
          console.log(response);
       }, function myError(response) {
          console.log(response);
       });
  }

  self.searchUsers();
  //1410106
  //10232178
  return self;
}
