const updateViewportSize = () => {
  const el = document.getElementById("viewport-size");
  if (!el) return;
  el.textContent = `${window.innerWidth}x${window.innerHeight}`;
};

const updateCopyrightYear = () => {
  const el = document.getElementById("copyright-year");
  if (!el) return;
  el.textContent = new Date().getFullYear();
};


window.addEventListener("resize", updateViewportSize);
window.addEventListener("load", () => {
  updateViewportSize();
  updateCopyrightYear();
  const loadingScreen = document.getElementById("loading-screen");
  if (!loadingScreen) return;
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    loadingScreen.remove();
  }, 500);
});
