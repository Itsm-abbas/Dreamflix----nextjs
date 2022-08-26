import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import LoadingBar from "react-top-loading-bar";
const TvRow = ({ title, fetchUrl, isLarge }) => {
  const router = useRouter();
  const ImageBaseUrl = "https://image.tmdb.org/t/p/w1280";
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(0);
    const fetchMovies = async () => {
      setProgress(20);
      const data = await fetch(
        `https://api.themoviedb.org/3${fetchUrl}&page=${page}`
      );
      setProgress(70);
      const result = await data.json();
      setMovies(result.results);
      setProgress(100);
    };
    fetchMovies();
  }, [fetchUrl, page]);
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="row">
        <h2>{title}</h2>
        <div
          className={`${
            isLarge ? "large__poster__wrapper" : "poster__wrapper"
          }`}
        >
          {page > 1 && (
            <div onClick={() => setPage(page - 1)} className="icon__wrapper">
              <FaArrowLeft className="icon" />
            </div>
          )}
          {movies.map((movie) => {
            return (
              <img
                onClick={() =>
                  router.push(`/show_detail?id=${movie.id}&name=${movie.name}`)
                }
                key={movie?.id}
                className="poster"
                src={`${ImageBaseUrl}${
                  movie?.poster_path || movie?.backdrop_path
                }`}
                alt={movie?.title}
              />
            );
          })}
          <div onClick={() => setPage(page + 1)} className="icon__wrapper">
            <FaArrowRight className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TvRow;
