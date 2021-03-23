peerConnection.ontrack = function({ streams: [stream] }) {
 const remoteVideo = document.getElementById("remote-video");
 if (remoteVideo) {
   remoteVideo.srcObject = stream;
 }
};
