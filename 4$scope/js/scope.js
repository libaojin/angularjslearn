angular.module("app",[])
  .controller('myCtrl',function($scope){
    $scope.user={name:'',pwd:''};
    $scope.errmsg='';
    $scope.login=function(){
      if($scope.user.name=='admin'&&$scope.user.pwd==123){
        $scope.errmsg='';
        alert('login ok');
      }else{
        $scope.errmsg='密码或用户名错误';
      }
    }
  })