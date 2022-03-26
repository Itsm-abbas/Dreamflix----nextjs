import Head from "next/head";
import Banner from "../Components/Banner";
import TvRow from "../Components/TvRow";
import MovieRow from "../Components/MovieRow";
import request from "../utils/Homerequests";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Dreamflix -- Home</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Banner fetchUrl={request.fetchNetfilxOriginals} />
      <TvRow
        title={"Netflix Original"}
        fetchUrl={request.fetchNetfilxOriginals}
        isLarge={true}
      />
      <MovieRow
        title={"Trending Movies"}
        fetchUrl={request.fetchTrendingMovies}
      />
      <MovieRow title={"Action Movies"} fetchUrl={request.fetchActionMovies} />
      <MovieRow
        title={"Romance Movies"}
        fetchUrl={request.fetchRomanceMovies}
      />
      <MovieRow
        title={"Adventure Movies"}
        fetchUrl={request.fetchAdventureMovies}
      />
      <MovieRow title={"Upcoming Movies"} fetchUrl={request.fetchUpcoming} />
    </div>
  );
}
