
var myApp  =  angular.module('myApp', ['ngMaterial']);

myApp.controller('jsonCtrl', function($scope, $http){
    $http.get('chatApp.json').success(function (data){
        $scope.chat = data;
    });

    $scope.chatNo1 = '';
    $scope.chatNo2 = '';
    
    var httpPost = function() {
            $http.post('save.php',$scope.chat).error(function(status){console.log(status)});
        };
     
    $scope.addChat1 = function(){      
     var currentdate = new Date(); 
     var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        $scope.chat.push({
          user: "No1",
          text: $scope.chatNo1,
          datetime: datetime,    
     });
         httpPost();
     };


     $scope.addChat2 = function(){      
     var currentdate = new Date(); 
     var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        $scope.chat.push({
          user: "No2",
          text: $scope.chatNo2,
          datetime: datetime,    
     });
         httpPost();
     };
    
 
});



