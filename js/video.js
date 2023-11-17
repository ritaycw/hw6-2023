var video;

// Page load: Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.getElementById("player1");

	video.autoplay = false;
	console.log("Auto play is set to false");

	video.loop = false;
	console.log("Loop is set to false");
});

// Play Button: Play the video and update the volume information.
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");

	video.play();
	updateVolumeInfo()
});

let volumeInfo = document.getElementById("volume");
function updateVolumeInfo() {
	volumeInfo.textContent = video.volume *100 + "%";
}

// Pause Button: Pause the video.
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");

	video.pause();
});

// Slow Down: Slow the current video speed by 10% each time 
// the button is clicked and log the new speed to the console. 
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");

	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Speed Up: Increase the current video speed each time 
// the button is clicked and log the new speed to the console. 
// Change it by an amount proportional to the slow down. 
// CHECK THIS!!  If you slow down three times and then speed up three times 
// you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");

	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Skip Ahead: Advance the current video by 10 seconds. 
// If the video length has been exceeded go back to the start of the video - no farther. 
// Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");

	video.currentTime += 10;
	console.log("Video current time is " + video.currentTime);
});

// Mute: Mute/unmute the video and update the text in the button.
var muteButton = document.querySelector("#mute");
muteButton.addEventListener("click", function() {
	if (video.muted === false) {
		muteButton.textContent = "Unmute";
		video.muted = true;
		console.log("Mute");
	} else {
		muteButton.textContent = "Mute";
		video.muted = false;
		console.log("Unmute");
	}
});

// Volume Slider: Change the volume based on the slider 
// and update the volume information.
let volumeSlider = document.querySelector("#slider")
volumeSlider.addEventListener("input", function() {
	// let volumeValue = volumeSlider.value;
	video.volume = volumeSlider.value/100;
	volumeInfo.textContent = volumeSlider.value + "%";
	console.log("The current value is " + video.volume);
});

// Styled: Utilize the existing oldSchool class on the video element
// https://www.w3schools.com/jsref/prop_element_classlist.asp
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");

	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");

	video.classList.remove("oldSchool");
})













