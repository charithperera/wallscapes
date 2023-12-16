document.addEventListener("DOMContentLoaded", () => {
  const wallpaperContainer = document.getElementById("wallpaper-container");
  const categorySelect = document.getElementById("category");
  const overlay = document.getElementById("overlay");
  const closeTutorial = document.getElementById("close-tutorial");

  let currentIndex = 0;
  let currentCategory = "abstract";

  let wallpapers = getWallpapers(currentCategory);

  wallpaperContainer.addEventListener("touchstart", (e) => {
    handleInteraction(e.changedTouches[0].clientX);
  });

  wallpaperContainer.addEventListener("click", (e) => {
    handleInteraction(e.clientX);
  });

  categorySelect.addEventListener("change", (e) => {
    currentCategory = e.target.value;
    wallpapers = getWallpapers(currentCategory);
    currentIndex = 0;
    updateWallpaper();
  });

  closeTutorial.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  function handleInteraction(positionX) {
    const midPoint = window.innerWidth / 2;
    if (positionX < midPoint) loadPreviousWallpaper();
    else loadNextWallpaper();
  }

  function loadNextWallpaper() {
    currentIndex = (currentIndex + 1) % wallpapers.length;
    updateWallpaper();
  }

  function loadPreviousWallpaper() {
    currentIndex = (currentIndex - 1 + wallpapers.length) % wallpapers.length;
    updateWallpaper();
  }

  function updateWallpaper() {
    wallpaperContainer.style.backgroundImage = `url('${wallpapers[currentIndex]}')`;
  }

  function getWallpapers(category) {
    // Update this function to return an array of wallpapers based on the selected category
    return [
      `images/${category}/wallpaper1.jpg`,
      `images/${category}/wallpaper2.jpg`,
      // ... more wallpapers
    ];
  }

  // Initialize with the first wallpaper
  updateWallpaper();
});
