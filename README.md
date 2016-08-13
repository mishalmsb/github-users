#FIND GITHUB USER

###CODE TEST. 
<img width="697" alt="screen shot 2016-08-13 at 16 39 52" src="https://cloud.githubusercontent.com/assets/18425871/17644072/a27a2172-6174-11e6-87db-e4c2b4326412.png">

###[Live Demo unavailable] (http://www.mishalmsb.com/)

####Some of the functionalities:
- Search Users from Github API
- See User details

####More info:

Search users:
 
      $http({
          method : "GET",
          url : "https://api.github.com/search/users?q=" + userQuery +      "&page=1&per_page=100" 
       }).then(function mySucces(response) {
       }, function myError(response) {
       });
 
Search a speceific user:
 
      $http({
          method : "GET",
          url : "https://api.github.com/users/" + user 
       }).then(function mySucces(response) {
       }, function myError(response) {
       });

The user search dosn't return the repos info so i crated a new get request to get thos info:

      $http({
          method : "GET",
          url : "https://api.github.com/users/"+user+"/repos?     page=1&per_page=100"
       }).then(function mySucces(response) {
          self.repos = response.data;
       }, function myError(response) {
          self.alert = response.data.message;
       });
  
The Github API only returns 100 users per GET request so in case there is more then 100 user for the search result i created:
  
      self.pege++;
      $http({
          method : "GET",
          url : "https://api.github.com/search/users?q=" + user +       "&page="+ self.pege +"&per_page=100" 
       }).then(function mySucces(response) {
       }, function myError(response) {
       });


###Screenshots: 

####Search page.
<img width="1177" alt="screen shot 2016-08-13 at 15 13 33" src="https://cloud.githubusercontent.com/assets/18425871/17643663/afcc737c-6168-11e6-9f15-3537c770fd47.png">

####User page.
<img width="449" alt="screen shot 2016-08-13 at 15 13 46" src="https://cloud.githubusercontent.com/assets/18425871/17643664/b4ec915c-6168-11e6-966c-c31be7cd0c5e.png">

##Technology used
- AngularJS
- Bootstrap

##To run the locally: 
python -m SimpleHTTPServer

 
##_________________________________________
Feedback welcome.


