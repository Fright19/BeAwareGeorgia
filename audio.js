// Get reference to the audio element
var audio = document.getElementById("audio");

// Get reference to the mascot image
var mascotImage = document.getElementById("mascotImage");

// Add click event listener to the mascot image
mascotImage.addEventListener("click", function() {
    // Play the audio
    audio.play();
});
