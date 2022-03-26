import React, { useContext, useState } from "react";
import Head from "next/head";
import style from "../styles/MovieDetail.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { AppContext } from "../context/ListContextProvider";
const MovieDetail = ({ data }) => {
  const ImageBaseUrl = "https://image.tmdb.org/t/p/w1280";
  let MyList = useContext(AppContext);
  const router = useRouter();
  const name = router.query.name;
  const [disable, setDisable] = useState(false);
  const { movieslist, setMoviesList } = MyList;
  const UpdateList = () => {
    setDisable(true);
    setMoviesList([...movieslist, data]);
    alert(`${data.title} is successfully added to the list`);
  };

  return (
    <>
      <Head>
        <title>Dreamflix -- {name}</title>
      </Head>
      <section className={style.section}>
        <div className={style.image__container}>
          <Image
            src={`${ImageBaseUrl + data.poster_path}`}
            width="550px"
            height="600px"
            alt={data.title}
            layout="responsive"
          />
        </div>
        <div className={style.Movie__details}>
          <p className={style.Movie__title}>{data?.title}</p>
          {data.tagline && (
            <p className={style.Movie__tagline}>Tagline : {data.tagline}</p>
          )}
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
            onClick={() =>
              router.push(`/movie_videos?id=${data.id}&name=${data.title}`)
            }
            className="btn"
          >
            Videos
          </button>
          <button
            onClick={() =>
              router.push(`/trailer?id=${data.id}&name=${data.title}`)
            }
            className="btn"
          >
            Trailer
          </button>
          <button
            onClick={() =>
              router.push(`/similar_movies?id=${data.id}&name=${data.title}`)
            }
            className="btn"
          >
            Similar
          </button>
          <button disabled={disable} onClick={UpdateList} className="btn">
            Add to list
          </button>
        </div>
      </section>
    </>
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
