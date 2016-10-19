(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('chatRoom', {
                url: '/',
                controller: 'ChatRoomCtrl as chatroom',
                templateUrl: '/templates/chatroom.html'
            })

    }

    angular
        .module('blocChat', ['ui.router'])
        .config(config);
})();