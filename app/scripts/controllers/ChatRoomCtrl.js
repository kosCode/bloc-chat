(function(){
    function ChatRoomCtrl($scope,Room) {
        $scope.rooms=Room.all;
    }
    angular
        .module('blocChat')
        .controller('ChatRoomCtrl',['$scope','Room',ChatRoomCtrl]);
})();