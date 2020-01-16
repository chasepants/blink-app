const socket = require('socket.io-client');
// ('https://damp-river-33545.herokuapp.com/')


class SocketHandler{
    SocketHandler(host){
        this.socket = require('socket.io-client')(host);
    }

    //send message
}