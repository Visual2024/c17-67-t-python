// unsplash.js
const API_KEY = 'b3-l7O2qdCoODYk4anazQ21DMszIgXsO3Z6As5d8eV8';

const fetchRandomFaceImage = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=face&orientation=squarish&client_id=${API_KEY}`
    );
    const data = await response.json();
    return data.urls.regular;
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
};

export default fetchRandomFaceImage;
