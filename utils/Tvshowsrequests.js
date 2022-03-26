const api_key = process.env.MOVIES_API_KEY;
const requests = {
  fetchTopRated: `/tv/top_rated?api_key=${api_key}&language=en-US`,
  fetchPopular: `/tv/popular?api_key=${api_key}&language=en-US`,
};

export default requests;
