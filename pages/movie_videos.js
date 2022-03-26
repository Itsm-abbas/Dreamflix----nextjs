import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import YouTube from "react-youtube";
const MovieVideos = ({ data }) => {
  const router = useRouter();
  const name = router.query.name;
  const style = {
    padding: "5rem 0",
    width: "100%",
    height: "auto",
  };
  return (
    <>
      <Head>
        <title>Dreamflix -- Videos ({name})</title>
      </Head>
      <div style={style}>
        {data.map((movie) => {
          return (
            <YouTube key={data.id} videoId={movie.key} className="player" />
          );
        })}
      </div>
    </>
  );
};

export default MovieVideos;
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const api_key = process.env.MOVIES_API_KEY;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`
  );
  const result = await data.json();
  return {
    props: {
      data: result.results,
    },
  };
};
