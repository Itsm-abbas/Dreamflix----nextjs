import React from "react";
import style from "../styles/MovieDetail.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const MovieDetail = ({ data }) => {
  const router = useRouter();
  const ImageBaseUrl = "https://image.tmdb.org/t/p/w1280";
  return (
    <section className={style.section}>
      <div className={style.image__container}>
        <Image
          src={`${ImageBaseUrl + data.poster_path || data.backdrop_path}`}
          width="550px"
          height="600px"
          alt={data.title}
          layout="responsive"
        />
      </div>
      <div className={style.Movie__details}>
        <p className={style.Movie__title}>{data?.title}</p>
        <p className={style.Movie__tagline}>Tagline : {data?.tagline}</p>
        <p className={style.Movie__overview}>Overview : {data?.overview}</p>
        <hr />
        <p className={style.Movie__budget}>Budget : {data?.budget}</p>
        <p className={style.Movie__popularity}>
          Popularity : {data?.popularity}
        </p>
        <p className={style.Movie__status}>Status : {data?.status}</p>
        <p className={style.Movie__releaseDate}>
          Release Date : {data?.release_date}
        </p>
        <button
          onClick={() => router.push(`/Movievideos?id=${data.id}`)}
          className="btn"
        >
          Videos
        </button>
        <button
          onClick={() => router.push(`/trailer?id=${data.id}`)}
          className="btn"
        >
          Trailer
        </button>
        <button
          onClick={() => router.push(`/SimilarMovies?id=${data.id}`)}
          className="btn"
        >
          Similar
        </button>
      </div>
    </section>
  );
};

export default MovieDetail;
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const api_key = process.env.MOVIES_API_KEY;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
  );
  const result = await data.json();
  return {
    props: {
      data: result,
    },
  };
};
