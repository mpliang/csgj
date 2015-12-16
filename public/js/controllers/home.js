app.controller('mainController', function ($scope, $http) {
  console.log('test');

  $scope.login = function(){
    console.log('steam signin');
    $http.get('/auth/steam')
      .then(function(data){
        console.log(data);
      }, function(err){
        console.log(err);
      })
  }

  $http.get('/user')
    .then(function(data){
      $scope.displayName = data.data.displayName;
      console.log('success', data.data);
    }, function(err){
      console.log(err);
    })
});
