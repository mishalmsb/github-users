angular
  .module('githubUsers')
  .controller('UsersController', UsersController);


UsersController.$inject = ['$http', '$scope'];
function UsersController($http, $scope){

  var self            = this;
  self.all            = [];
  self.query          = "";
  self.pege           = 1;
  self.totalPages     = 0;
  self.usersCount     = 0;
  self.currentPage    = 0;
  self.pageSize       = 10;
  self.alert          = "";
  self.searchUsers = function() {
      self.currentPage = 0;
      $http({
          method : "GET",
          url : "https://api.github.com/search/users?q=" + self.query + "&page="+ self.pege +"&per_page=100" 
       }).then(function mySucces(response) {
          self.all = response.data.items;
          self.usersCount = response.data.total_count;
          self.totalPages = Math.ceil(self.all.length / 10);
          if (self.usersCount == 0) {
              self.alert = "Nothing";
          }
          console.log(response);
       }, function myError(response) {
          console.log(response);
       });
  }

  return self;
}

