socket.on("disconnect", () => {
   this.activeSockets = this.activeSockets.filter(
     existingSocket => existingSocket !== socket.id
   );
   socket.broadcast.emit("remove-user", {
     socketId: socket.id
   });
 });
