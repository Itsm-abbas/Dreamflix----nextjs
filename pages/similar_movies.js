import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Similar from "../Components/Movie_Box";
import style from "../styles/movieBox.module.css";
const SimilarMovies = ({ data }) => {
  const router = useRouter();
  const name = router.query.name;
  return (
    <>
      <Head>
        <title>Dreamflix -- Similar ({name})</title>
      </Head>
      <div className={style.container}>
        {data.map((item) => {
          return (
            <Similar
              key={item.id}
              id={item.id}
              imgsrc={item.poster_path}
              name={item.name}
            />
          );
        })}
      </div>
    </>
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
