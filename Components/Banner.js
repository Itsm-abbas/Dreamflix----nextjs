import React, { useEffect, useState } from "react";
import style from "../styles/banner.module.css";
import { FaPlay, FaCheck } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
const Banner = ({ fetchUrl }) => {
  const router = useRouter();
  const ImageBaseUrl = "https://image.tmdb.org/t/p/w1280";
  const [movies, setMovies] = useState("");
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetch(`https://api.themoviedb.org/3${fetchUrl}`);
      const result = await data.json();
      setMovies(
        result.results[Math.floor(Math.random() * result.results.length)]
      );
    };
    fetchMovies();
  }, [fetchUrl]);
  let trimmedOverview = String(movies?.overview).substring(0, 120);
  return (
    <header
      className={style.banner}
      style={{
        width: "100%",
        height: "20rem",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0, 0, 0, 0.3)), url(${
          ImageBaseUrl + movies?.poster_path
        })`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className={style.banner_wrapper}>
        <h2 className={style.banner_heading}>
          NETFLIX <span>ORIGINAL</span>
        </h2>
        <h1 className={style.banner_title}>
          {movies?.name || movies?.original_name}
        </h1>
        <div className={style.btns}>
          <button
            className={`${style.btn} ${style.playbtn}`}
            onClick={() => router.push(`/show_detail?id=${movies.id}`)}
          >
            <FaPlay /> play
          </button>
          <Link href={"/list"} passHref>
            <button className={style.btn}>
              <FaCheck /> my list
            </button>
          </Link>
        </div>
        <p className={style.overview}>{trimmedOverview}....</p>
      </div>
      <div className={style.banner_fadeBottom}></div>
    </header>
  );
};

export default Banner;
