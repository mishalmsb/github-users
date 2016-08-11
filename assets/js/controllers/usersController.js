angular
  .module('githubUsers')
  .controller('UsersController', UsersController);


UsersController.$inject = ['$http', '$scope'];
function UsersController($http, $scope){

  var self            = this;
  self.all            = [];
  self.query          = "mishal";
  self.img            = "";
  self.pege           = 1;
  self.totalPages     = 0;
  self.usersCount     = 0;
  self.currentPage    = 0;
  self.pageSize       = 10;

  self.searchUsers = function() {
      $http({
          method : "GET",
          url : "https://api.github.com/search/users?q=" + self.query + "&page="+ self.pege +"&per_page=20" 
       }).then(function mySucces(response) {
          self.all = response.data.items;
          self.usersCount = response.data.total_count;
          self.totalPages = Math.ceil(response.data.total_count / 20);
          console.log(response);
       }, function myError(response) {
          console.log(response);
       });
  }

  self.numberOfPages=function(){
      return Math.ceil(7);                
  }

  self.searchUsers();
  //1410106
  //10232178

  return self;
}

