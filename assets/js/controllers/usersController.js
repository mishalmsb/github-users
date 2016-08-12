angular
  .module('githubUsers')
  .controller('UsersController', UsersController);


UsersController.$inject = ['$http', '$scope'];
function UsersController($http, $scope){

  var self            = this;
  self.all            = [];
  self.user           = [];
  self.userQuery      = "octocat";
  self.pege           = 1;
  self.totalPages     = 0;
  self.usersCount     = 0;
  self.currentPage    = 0;
  self.pageSize       = 10;
  self.alert          = "";
  self.repos          = [];

  self.searchUsers = function() {
      self.currentPage = 0;
      $http({
          method : "GET",
          url : "https://api.github.com/search/users?q=" + self.userQuery + "&page="+ self.pege +"&per_page=100" 
       }).then(function mySucces(response) {
          self.all = response.data.items;
          self.usersCount = response.data.total_count;
          self.totalPages = Math.ceil(self.all.length / 10);
          if (self.usersCount == 0) {
              self.alert = "Nothing";
          }
       }, function myError(response) {
          self.alert = response.data.message;
       });
  }
  self.getUser = function(user) {
      $http({
          method : "GET",
          url : "https://api.github.com/users/" + user 
       }).then(function mySucces(response) {
          self.getUserRepo(user);
       }, function myError(response) {
          self.alert = response.data.message;
       });
  }
  self.getUserRepo = function(user) {
      $http({
          method : "GET",
          url : "https://api.github.com/users/"+user+"/repos?page=1&per_page=100"
       }).then(function mySucces(response) {
        self.repos = response.data;
       }, function myError(response) {
          self.alert = response.data.message;
       });
  }
  // self.getUser("GrahamCampbell");
  return self;
}

