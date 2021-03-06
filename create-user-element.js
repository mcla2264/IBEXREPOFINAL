function createUserItemContainer(socketId) {
 const userContainerEl = document.createElement("div");
 
 const usernameEl = document.createElement("p");
 
 userContainerEl.setAttribute("class", "active-user");
 userContainerEl.setAttribute("id", socketId);
 usernameEl.setAttribute("class", "username");
 usernameEl.innerHTML = `Socket: ${socketId}`;
 
 userContainerEl.appendChild(usernameEl);
 
 userContainerEl.addEventListener("click", () => {
   unselectUsersFromList();
   userContainerEl.setAttribute("class", "active-user active-user--selected");
   const talkingWithInfo = document.getElementById("talking-with-info");
   talkingWithInfo.innerHTML = `Talking with: "Socket: ${socketId}"`;
   callUser(socketId);
 }); 
 return userContainerEl;
}
