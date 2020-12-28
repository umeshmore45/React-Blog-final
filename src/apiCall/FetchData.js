export const blogUrl = "http://localhost:8000/blog/";

export const fetchData = async (url) => {
  return await fetch(url).then((response) => {
    return response.json();
  });
};
