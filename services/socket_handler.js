const socket = require('socket.io-client');
// ('https://damp-river-33545.herokuapp.com/')


class SocketHandler{
    constructor(host){
        this.socket = require('socket.io-client')(host);
    }

    //send message
    send(){
        this.socket.emit('stateChanged', true);
        return true;
    }
}   

module.exports = {
    SocketHandler
}
