import { Server } from "socket.io";

const io = new Server({ 
    cors: {
        origin: "*",
    }
 });

    let onlineUsers = []

    const addNewUser = (user_id, socketId) => {
    !onlineUsers.some(user => user.user_id === user_id) &&
    onlineUsers.push({ user_id, socketId })
    }

    const removeUser = (socketId) => {
        onlineUsers = onlineUsers.filter(user => user.socketId !== socketId)
    }

    const getUser = (user_id) => {
        return onlineUsers.find(user => user.user_id === user_id)
    }

    io.on("connection", (socket) => {
    // io.emit("firstEvent", "hello this is test!")
    socket.on("newUser" , (user_id) => {
        addNewUser(user_id, socket.id)
    })

    socket.on("sendNotification", ({senderName, receiverName}) => {
        const receiver = getUser(receiverName)
        io.to(receiver.socketId).emit("getNotification", {senderName})
    })

    socket.on("disconnect", () => {
        removeUser(socket.id)
    })
});

io.listen(5000);