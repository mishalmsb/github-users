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
//console.log(response);
       }, function myError(response) {
          self.alert = response;
       });
  }
  //Details view page for a selected user from the results pages (name, location, avatar, 3
  //repositories with higher stargazers_count and other information you consider relevant)
  self.getUser = function(user) {
      $http({
          method : "GET",
          url : "https://api.github.com/users/" + user 
       }).then(function mySucces(response) {
          
// console.log(response.data.name);
// console.log(response.data.location);
// console.log(response.data.avatar_url);
          self.getUserRepo(user);
       }, function myError(response) {
          self.alert = response;
       });
  }

    self.getUserRepo = function(user) {
        $http({
            method : "GET",
            url : "https://api.github.com/users/"+user+"/repos?page=5000,per_page=100,order=desc"
              
         }).then(function mySucces(response) {
            
  // console.log(response.data[0].stargazers_count);
  console.log(response.data);
  // console.log(response.data.avatar_url);
          self.repos = response.data;

         }, function myError(response) {
            self.alert = response;
         });
    }
  
  self.getUser("GrahamCampbell");

  return self;
}

