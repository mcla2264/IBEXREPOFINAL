this.io.on("connection", socket => {
     const existingSocket = this.activeSockets.find(
       existingSocket => existingSocket === socket.id
     );
 
     if (!existingSocket) {
       this.activeSockets.push(socket.id);
 
       socket.emit("update-user-list", {
         users: this.activeSockets.filter(
           existingSocket => existingSocket !== socket.id
         )
       });
 
       socket.broadcast.emit("update-user-list", {
         users: [socket.id]
       });
     }
   }
