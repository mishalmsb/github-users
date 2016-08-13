angular
  .module('githubUsers')
  .controller('UsersController', UsersController);

UsersController.$inject = ['$http', '$scope', '$state', '$location'];
function UsersController($http, $scope, $state, $location){

  var self                  = this;
  self.all                  = [];
  self.user                 = [];
  self.userQuery            = "";
  self.pege                 = 1;
  self.totalPages           = 0;
  self.usersCount           = 0;
  self.currentUsersCount    = 0;
  self.currentPage          = 0;
  self.pageSize             = 12;
  self.alert                = "";
  self.currentUsers         = "";
  self.repos                = [];

  self.searchUsers = function() {
      self.currentPage = 0;
      $http({
          method : "GET",
          url : "https://api.github.com/search/users?q=" + self.userQuery + "&page="+ self.pege +"&per_page=100" 
       }).then(function mySucces(response) {
          self.currentUsers = self.userQuery;
          self.userQuery = "";
          self.all = response.data.items;
          self.usersCount = response.data.total_count;
          self.currentUsersCount = 100;
          self.totalPages = Math.ceil(self.all.length / 12);
          if (self.usersCount == 0) {
              self.alert = "Could not find user";
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
          self.user = response ;
          self.getUserRepo(user);
       }, function myError(response) {
          self.alert = response.data.message;
       });
  }
  self.getUserRepo = function(user) {
      self.user.name = user
      $http({
          method : "GET",
          url : "https://api.github.com/users/"+user+"/repos?page=1&per_page=100"
       }).then(function mySucces(response) {
          self.repos = response.data;
       }, function myError(response) {
          self.alert = response.data.message;
       });
  }
  self.getMoreUsers = function(user) {
      self.pege++;
      $http({
          method : "GET",
          url : "https://api.github.com/search/users?q=" + user + "&page="+ self.pege +"&per_page=100" 
       }).then(function mySucces(response) {
          self.all = self.all.concat(response.data.items);
          self.totalPages = Math.ceil(self.all.length / 12);
          self.currentUsersCount+= 100;
       }, function myError(response) {
          self.alert = response.data.message;
       });
  }

  self.init = function () {
      $location.path('/')
  };

  self.init()


  // self.userQuery = "Giacomo";
  // self.searchUsers();
  // self.getUser("Mishal");
  return self;
}

