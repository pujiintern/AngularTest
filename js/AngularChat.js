
var myApp  =  angular.module('myApp', []);

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
    
    $scope.deleteChat = function ( idx ) {
            
                $scope.chat.splice(idx, 1);
                httpPost();
            
        };
        
   
   




   /* $scope.saveToPc = function (data, filename) {
        data = {
    "userId": 100,
    "id": 100,
    "title": "test",
    "body": "test\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt"
  }
  if (!data) {
    console.error('No data');
    return;
  }

  if (!filename) {
    filename = 'TestJSON.json';
  }

  if (typeof data === 'object') {
    data = JSON.stringify(data, undefined, 2);
  }

  var blob = new Blob([data], {type: 'text/json'});

  // FOR IE:

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename);
  }
  else{
      var e = document.createEvent('MouseEvents'),
          a = document.createElement('a');

      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window,
          0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
  }
};*/
});



