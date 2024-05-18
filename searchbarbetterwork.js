document.getElementById("searchInput").addEventListener("input", function () {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var outputImage = document.getElementById("outputImage");

    if (searchTerm === "cobb") {
        outputImage.src = "cobb county.png";
        outputImage.style.display = "block";
       
        var link = document.createElement("a");
        link.href = "cobb.html"; 
        link.appendChild(outputImage);
        document.body.appendChild(link);
    } else if (searchTerm === "douglas") {
        outputImage.src = "douglas county.png";
        outputImage.style.display = "block";
       
        var link = document.createElement("a");
        link.href = "douglas.html"; 
        link.appendChild(outputImage);
        document.body.appendChild(link);
    } else if (searchTerm === "fulton") {
        outputImage.src = "fulton county.png"; // Corrected image file path
        outputImage.style.display = "block";
       
        var link = document.createElement("a");
        link.href = "fulton.html"; // Corrected link href
        link.appendChild(outputImage);
        document.body.appendChild(link);
    } else {
        outputImage.style.display = "none";
    }
});
