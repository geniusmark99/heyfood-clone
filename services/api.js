const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchRestaurants = async (params) => {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_URL}/restaurants?${query}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchTags = async () => {
  const response = await fetch(`${BASE_URL}/tags`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
