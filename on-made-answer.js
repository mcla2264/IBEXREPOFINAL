socket.on("answer-made", async data => {
 await peerConnection.setRemoteDescription(
   new RTCSessionDescription(data.answer)
 );
 
 if (!isAlreadyCalling) {
   callUser(data.socket);
   isAlreadyCalling = true;
 }
});
