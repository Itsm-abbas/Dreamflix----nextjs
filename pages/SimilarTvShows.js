import React from "react";
import Similar from "../Components/SimilarTvShow";
import style from "../styles/similar.module.css";
const SimilarTvShows = ({ data }) => {
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

export default SimilarTvShows;
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const api_key = process.env.MOVIES_API_KEY;
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${api_key}&language=en-US`
  );
  const result = await data.json();
  return {
    props: {
      data: result.results,
    },
  };
};
