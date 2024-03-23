var button = document.getElementById("switch-button");
var mode = "light";
var body = document.body;

button.addEventListener("click", function() {
  if (mode === "light") {
    // Mode to Dark
    mode = "dark";
    // Dark Mode GIF
    body.style.backgroundImage = "var(--dark-mode-background)";
  } else {
    // Mode to Light
    mode = "light";
    // Light Mode GIF
    body.style.backgroundImage = "var(--light-mode-background)";
  }
});
