socket.on("update-user-list", ({ users }) => {
 updateUserList(users);
});
 
socket.on("remove-user", ({ socketId }) => {
 const elToRemove = document.getElementById(socketId);
 
 if (elToRemove) {
   elToRemove.remove();
 }
});
