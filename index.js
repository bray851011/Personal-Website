const textContainer = document.getElementById('changing-text');
const strings = ["a Dreamer", "an Executor", "a Programmer"]; // The strings to switch between
let currentIndex = 0; // Index to keep track of the current string

function switchText() {
    textContainer.style.opacity = 0; // Fade out
    setTimeout(() => {
        textContainer.textContent = strings[currentIndex];
        textContainer.style.opacity = 1; // Fade in
        currentIndex = (currentIndex + 1) % strings.length; // Increment index and wrap around
    }, 500); // Delay before fading in
}

setInterval(switchText, 3000); // Switch every 3 seconds (3000 milliseconds)
// setTimeout(setInterval(switchText, 3000), 3000);
