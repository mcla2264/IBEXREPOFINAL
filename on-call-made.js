socket.on("call-made", async data => {
 await peerConnection.setRemoteDescription(
   new RTCSessionDescription(data.offer)
 );
 const answer = await peerConnection.createAnswer();
 await peerConnection.setLocalDescription(new RTCSessionDescription(answer));
 
 socket.emit("make-answer", {
   answer,
   to: data.socket
 });
});
