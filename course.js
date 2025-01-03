const buttons = document.querySelectorAll('#btn');

// Loop through each button
buttons.forEach(button => {
// Check the innerHTML of the button
if (button.innerHTML === 'ENROLL NOW') {
    // Set the background to green
    button.style.backgroundColor = 'green';
    button.style.color = 'white'; // Optional for better visibility
} else if (button.innerHTML === 'COMING SOON') {
    // Set the background to red
    button.style.backgroundColor = 'red';
    button.style.color = 'white'; // Optional for better visibility

    // Disable the cursor and interaction
    button.style.cursor = 'not-allowed';
    button.disabled = true;
}
});


// function update() {
//     var header = document.querySelector("header");
//     var aboutSection = document.getElementById("about");
//     var containers = document.querySelectorAll(".container");
//     var bodycontent = document.getElementById("home");
//     var heading= document.getElementById("heading");

//     if (aboutSection.style.display === "block") {
//         // Hide the "About Us" section and show containers
//         aboutSection.style.display = "none";
//         aboutSection.style.transitionDuration = "1s";
//         bodycontent.style.opacity = 1;

//         containers.forEach(container => {
//             container.style.display = "flex"; // Reset containers visibility
//         });

//         // Ensure the header remains visible
//         header.style.opacity = 1;
//     } else {
//         // Show the "About Us" section and hide containers
//         aboutSection.style.display = "block";
//         aboutSection.style.textAlign = "center"; // Center the content
//         aboutSection.style.margin = "20px 0"; // Optional: Add spacing
//         aboutSection.style.transitionDuration = "1s";

//         bodycontent.style.opacity = 0.7;

//         containers.forEach(container => {
//             container.style.display = "none"; // Hide containers
//         });

//         // Ensure the header remains visible
//         header.style.opacity = 1;
//     }
// }
