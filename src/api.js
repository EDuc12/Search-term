import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID dGMYNQmCaJ9pIYYnypZC2W5elWli3grn9bnsrKkGKng",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
