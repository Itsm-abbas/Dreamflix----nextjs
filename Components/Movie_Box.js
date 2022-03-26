import React from "react";
import style from "../styles/movieBox.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const Movie_Box = ({ id, imgsrc, name }) => {
  const ImageBaseUrl = "https://image.tmdb.org/t/p/w1280";
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push(`/movie_detail?id=${id}`)}
      className={style.Image}
      src={`${ImageBaseUrl + imgsrc}`}
      alt={name}
      width="300px"
      height="350px"
      layout="responsive"
      priority
    />
  );
};

export default Movie_Box;
