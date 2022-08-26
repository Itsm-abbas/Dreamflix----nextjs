import React from "react";
import Similar from "../Components/SimilarMovie";
import style from "../styles/similar.module.css";
const SimilarMovies = ({ data }) => {
  const ImageBaseUrl = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className={style.container}>
      {data.map((item) => {
        return (
          <Similar
            key={item.id}
            id={item.id}
            imgsrc={ImageBaseUrl + item.backdrop_path || item.poster_path}
            name={item.name}
          />
        );
      })}
    </div>
  );
};

export default SimilarMovies;
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const api_key = process.env.MOVIES_API_KEY;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}&language=en-US`
  );
  const result = await data.json();
  return {
    props: {
      data: result.results,
    },
  };
};
