async function callUser(socketId) {
 const offer = await peerConnection.createOffer();
 await peerConnection.setLocalDescription(new RTCSessionDescription(offer));
 
 socket.emit("call-user", {
   offer,
   to: socketId
 });
}
