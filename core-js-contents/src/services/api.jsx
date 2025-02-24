const BASE_URL = "https://dummyjson.com/c/";

// Generic API Fetch function
export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
};
