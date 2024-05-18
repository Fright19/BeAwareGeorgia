document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    var mascotImage = document.querySelector(".content img[src='beawaremascotidle.gif']");

    mascotImage.addEventListener("click", function() {
        audio.play();
    });
});