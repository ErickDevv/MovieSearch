const fetchMovie = async (movieTitle: string) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const res = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t=${movieTitle}`
  );

  const data = await res.json();

  return data;
};

export default fetchMovie;
