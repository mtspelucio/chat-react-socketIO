const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: {origin: 'http://localhost:5173' } });

const PORT = 3001

let messages = [];

io.on('connection', socket => {
    console.log("user connect", socket.id)

    socket.on('disconnect', reason => {
        console.log('Usuério desconectado', socket.id)
    })

    socket.on('set_username', userName => {
        socket.data.userName = userName
    })

    socket.emit('previous_message', messages)

    socket.on('message', text => {
        let data = {
            text,
            authorId: socket.id,
            author: socket.data.userName
        }
        io.emit('receive_message', data)
        messages.push(data)
    })
})

server.listen(PORT, () => console.log("--> Server runing"))