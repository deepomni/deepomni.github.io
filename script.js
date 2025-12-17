const updateViewportSize = () => {
  const viewportElement = document.getElementById("viewport-size");
  if (viewportElement) {
    viewportElement.textContent = `${window.innerWidth}x${window.innerHeight}`;
  }
};

const updateCopyrightYear = () => {
  const yearElement = document.getElementById("copyright-year");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }
};

window.addEventListener("resize", updateViewportSize);
window.addEventListener("load", () => {
  updateViewportSize();
  updateCopyrightYear();
});

setTimeout(() => {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.classList.add("hidden");
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 300);
  }
}, 800);
