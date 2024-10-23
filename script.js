//your JS code here. If required.
const buttons= document.querySelectorAll(".btn");
const stop= document.querySelector(".stop");

let currentAudio= null;

buttons.forEach(button => {
	/*
	const sound = button.getAttribute("data-sound");
	// Create a new audio element and append it to the DOM
	currentAudio = document.createElement("audio");
	currentAudio.src = sound;
	*/
	document.body.appendChild(currentAudio);  // Append the audio element to the body
	//console.log(currentAudio);

	button.addEventListener("click", () => {
		const sound = button.getAttribute("data-sound");
		
		if(currentAudio) {
			currentAudio.pause();
			currentAudio.currentTime = 0;
		}
		
		currentAudio = new Audio(sound);
		currentAudio.play();
	})
})

stop.addEventListener("click", () => {
	if(currentAudio) {
		currentAudio.pause();
		currentAudio.currentTime = 0;
	}
})















