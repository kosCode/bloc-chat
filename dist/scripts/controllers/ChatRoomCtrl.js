(function(){
    function ChatRoomCtrl(Room) {
        this.roomList=room.Room.roomList;
    }
    angular
        .module('blocChat')
        .controller('ChatRoomCtrl',ChatRoomCtrl);
})();