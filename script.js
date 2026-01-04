// ---- TEXT ANIMATION (typing effect) ----
function typeEffect(element, speed = 40) {
  const text = element.innerText;
  element.innerText = "";
  element.style.opacity = 1;

  let i = 0;
  const typing = setInterval(() => {
    element.innerText += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(typing);
  }, speed);
}

// Animate on load
window.onload = () => {
  const title = document.getElementById("title");
  const mainText = document.getElementById("main-text");

  title.style.opacity = 0;
  mainText.style.opacity = 0;

  // Title fade + slide
  setTimeout(() => {
    title.style.transition = "all 1.2s ease";
    title.style.opacity = 1;
    title.style.transform = "translateY(0)";
  }, 300);

  // Main text typing
  setTimeout(() => {
    typeEffect(mainText, 35);
  }, 1000);
};

// ---- SURPRISE ANIMATION ----
function showSurprise() {
  const surprise = document.getElementById("surprise");
  surprise.classList.remove("hidden");

  surprise.style.opacity = 0;
  surprise.style.transform = "translateY(15px)";
  surprise.style.transition = "all 1s ease";

  setTimeout(() => {
    surprise.style.opacity = 1;
    surprise.style.transform = "translateY(0)";
  }, 100);
}
