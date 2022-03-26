import React from "react";
import Head from "next/head";
import Result from "../Components/Movie_Box";
import style from "../styles/movieBox.module.css";
const SearchResult = ({ data, name }) => {
  return (
    <>
      <Head>
        <title>Dreamflix -- {name} results</title>
      </Head>
      {data.length != 0 && (
        <div className={style.container}>
          {data.map((item) => {
            return (
              <Result
                key={item.id}
                id={item.id}
                imgsrc={item.poster_path || item.backdrop_path}
                name={item.name}
              />
            );
          })}
        </div>
      )}
      {data.length === 0 && <h1 className={style.container}>No result</h1>}
    </>
  );
};

export default SearchResult;
export const getServerSideProps = async (context) => {
  const movie_name = context.query.search;
  const api_key = process.env.MOVIES_API_KEY;
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movie_name}`
  );
  const result = await data.json();
  return {
    props: {
      data: result.results,
      name: movie_name,
    },
  };
};
