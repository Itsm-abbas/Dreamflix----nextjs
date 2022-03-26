import React from "react";
import request from "../utils/Homerequests";
import MovieRow from "../Components/MovieRow";
import Head from "next/head";
const Movies = () => {
  const style = {
    padding: "5rem 0",
  };

  return (
    <>
      <Head>
        <title>Dreamflix -- Movies</title>
      </Head>
      <div style={style}>
        <MovieRow
          title={"Trending Movies"}
          fetchUrl={request.fetchTrendingMovies}
          isLarge="true"
        />
        <MovieRow
          title={"Action Movies"}
          fetchUrl={request.fetchActionMovies}
          isLarge="true"
        />
        <MovieRow
          title={"Romance Movies"}
          fetchUrl={request.fetchRomanceMovies}
          isLarge="true"
        />
        <MovieRow
          title={"Adventure Movies"}
          fetchUrl={request.fetchAdventureMovies}
          isLarge="true"
        />
        <MovieRow
          title={"Upcoming Movies"}
          fetchUrl={request.fetchUpcoming}
          isLarge="true"
        />
      </div>
    </>
  );
};

export default Movies;
