let state = {
	stream: null,
	id: null
}

let peer = new Peer({
	host: 'aace7297.ngrok.io',
	port: '',
	path: '/myapp'
}); 

peer.on('open', (id) => {
	state.id = id;
	document.querySelector('#my-id').innerText = id;
})

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
	.then(stream => {
		addStreamToVid(stream, 'me');
		state.stream = stream;
	})
	.catch(err => console.log(err));

let addStreamToVid = (stream, videoID) => {
	let vid = document.querySelector('#'+videoID);
	vid.srcObject = stream;
	vid.onloadedmetadata = () => vid.play();
}

let callFriend = () => {
	let friendID = document.querySelector('#friend-id').value;
	console.log('calling friend: ', friendID);

	let call = peer.call(friendID, state.stream);
	call.on('stream', (remoteStream) => {
		console.log(remoteStream);
		addStreamToVid(remoteStream, 'friend');
	});
}

peer.on('call', (call) => {
	call.answer(state.stream);
	call.on('stream', (remoteStream) => {
		addStreamToVid(remoteStream, 'friend');
	});
});
