const updateViewportSize = () => {
  const viewportElement = document.getElementById("viewport-size");
  if (viewportElement) {
    viewportElement.textContent = `${window.innerWidth}x${window.innerHeight}`;
  }
};

window.addEventListener("resize", updateViewportSize);
window.addEventListener("load", updateViewportSize);
