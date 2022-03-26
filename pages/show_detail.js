import React, { useContext, useState } from "react";
import Head from "next/head";
import style from "../styles/MovieDetail.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { AppContext } from "../context/ListContextProvider";
const TvShowDetail = ({ data }) => {
  const router = useRouter();
  const name = router.query.name;
  const ImageBaseUrl = "https://image.tmdb.org/t/p/w1280";
  const MyList = useContext(AppContext);
  const { showslist, setShowsList } = MyList;
  const [disable, setDisable] = useState(false);
  const UpdateList = () => {
    setDisable(true);
    setShowsList([...showslist, data]);
    alert(`${data.name} is successfully added to the list`);
  };
  return (
    <>
      <Head>
        <title>Dreamflix -- {name}</title>
      </Head>
      <section className={style.section}>
        <div className={style.image__container}>
          <Image
            src={`${ImageBaseUrl + data.poster_path || data.backdrop_path}`}
            width="600px"
            height="600px"
            alt={data.name}
          />
        </div>
        <div className={style.Movie__details}>
          <p className={style.Movie__title}>{data?.name}</p>
          {data.tagline && (
            <p className={style.Movie__tagline}>Tagline : {data.tagline}</p>
          )}
          <p className={style.Movie__overview}>Overview : {data?.overview}</p>
          <hr />

          <p className={style.Movie__popularity}>
            Popularity : {data?.popularity}
          </p>
          <p className={style.Movie__status}>Status : {data?.status}</p>
          <p className={style.Movie__airtime}>
            First air time : {data?.first_air_date}
          </p>
          <p className={style.Movie__airtime}>
            Last air time : {data?.last_air_date}
          </p>
          <p className={style.Movie__homepage}>
            Homepage :{" "}
            <a href={data?.homepage} target={"_blank"} rel="noreferrer">
              {data?.homepage}
            </a>
          </p>
          <button
            onClick={() =>
              router.push(`/show_videos?id=${data.id}&name=${data.name}`)
            }
            className="btn"
          >
            Videos
          </button>
          <button
            onClick={() =>
              router.push(`/similar_shows?id=${data.id}&name=${data.name}`)
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

export default TvShowDetail;
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const api_key = process.env.MOVIES_API_KEY;
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&language=en-US`
  );
  const result = await data.json();
  return {
    props: {
      data: result,
    },
  };
};
