import  io from "socket.io-client";

const socket = new WebSocket('wss://dealer-status-reporter-devprem.leverex.io/websocket');


function subscribeToTimer(callback) {
  console.log('test');
  socket.onmessage = function (event) {
    console.log(event);
    callback(null, event.data);
    
  };
/*
  socket2.on('timer', timestamp => callback(null, timestamp));

  socket2.emit('subscribeToTimer', 1000);*/

}
const getSelPos = async(ws) =>{
  // Use socket instance
}

function sendForm(jsonObject) {
    socket.emit('client-event', JSON.stringify(jsonObject));
}

export { subscribeToTimer };
export { sendForm };
