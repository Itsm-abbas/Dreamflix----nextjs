import React from "react";
import Head from "next/head";
import TvRow from "../Components/TvRow";
import requests from "../utils/Tvshowsrequests";
const TvShows = () => {
  const style = {
    padding: "5rem 0",
  };
  return (
    <>
      <Head>
        <title>Dreamflix -- TV Shows</title>
      </Head>
      <div style={style}>
        <TvRow
          title={"Popular Shows"}
          fetchUrl={requests.fetchPopular}
          isLarge="true"
        />
        <TvRow
          title={"Top Rated Shows"}
          fetchUrl={requests.fetchTopRated}
          isLarge="true"
        />
      </div>
    </>
  );
};

export default TvShows;
