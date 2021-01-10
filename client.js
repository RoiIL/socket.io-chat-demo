const io = require("socket.io-client");


const ioClient = io.connect("http://localhost:3723/socket.io/");

ioClient.on('connect', () => {
    console.log("Connected!");
});

ioClient.on('message-to-all-from-server', (socket, packet, args) => {
    console.log("Non Sec Message");
});

// const ioClient = io.connect("http://localhost:3723");
// ioClient.on('message-to-all-from-server', (socket, packet, args) => {
//     console.log("Non Sec Message");
// });

// const secClient = io.connect("https://localhost:3722");

// secClient.on('message-to-all-from-server', (socket, packet, args) => { 
//     console.log("Sec Message");
//     console.info(msg);    
// });

// const sideClient = io.connect("http://localhost:3721");

// sideClient.on('connect', () => {
//     console.log("Connected!");
// });

// sideClient.on('chat message', (msg) => { 
//     console.log("chat Message");
//     console.info(msg);    
// });