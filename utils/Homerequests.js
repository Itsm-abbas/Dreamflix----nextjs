const api_key = process.env.MOVIES_API_KEY;
const requests = {
  fetchNetfilxOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchAdventureMovies: `/discover/movie?api_key=${api_key}&with_genres=12`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchHororrMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchTrendingMovies: `/trending/all/day?api_key=${api_key}`,
  fetchUpcoming: `/movie/upcoming?api_key=${api_key}&language=en-US`,
};
export default requests;
