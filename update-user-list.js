function updateUserList(socketIds) {
 const activeUserContainer = document.getElementById("active-user-container");
 
 socketIds.forEach(socketId => {
   const alreadyExistingUser = document.getElementById(socketId);
   if (!alreadyExistingUser) {
     const userContainerEl = createUserItemContainer(socketId);
     activeUserContainer.appendChild(userContainerEl);
   }
 });
}
