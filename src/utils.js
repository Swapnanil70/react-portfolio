export const getImageUrl = (path) => {
    // Taking the path of the image and returning the URL of the image
  return new URL(`/assests/${path}`, import.meta.url).href;
}; // Dynamic import of the image URL