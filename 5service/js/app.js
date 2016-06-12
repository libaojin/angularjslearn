angular.module('app',[])
.value('realname','zhaoliu')
.value('realname','wangwu')//可以改变
.constant('http','www.baidu.com')
.constant('http','www.sohu.com')//常量 不可改变
.factory('Data',function(){
  return{
    msg:'你好啊',
    setMsg:function(){
      this.msg='我不好'
    }
  }
})
.service('user',function(){
  this.firstname='上官';
  this.lastname='飞燕';
  this.getname=function(){
    return this.firstname+this.lastname;
  }
})
.controller('Myctrl',function($scope,realname,http,Data,user){
  $scope.msg="你好";
  $scope.realname=realname;
  $scope.http=http;
  $scope.data=Data;
  Data.setMsg();
  $scope.uname=user.getname();

})