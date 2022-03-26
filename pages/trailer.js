import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const Trailer = ({ id }) => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const name = router.query.name;
  movieTrailer(null, { tmdbId: id }).then((res) => {
    setUrl(res.substring(res.indexOf("=") + 1));
  });
  console.log(url);
  const style = {
    padding: "5rem 0",
    width: "100%",
    height: "auto",
  };
  return (
    <>
      <Head>
        <title>Dreamflix -- Trailer ({name}) </title>
      </Head>
      <div style={style}>
        <YouTube videoId={url} className="player" />
      </div>
    </>
  );
};

export default Trailer;
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  return {
    props: {
      id,
    },
  };
};
