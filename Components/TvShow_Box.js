import React from "react";
import style from "../styles/movieBox.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const Similar = ({ id, imgsrc, name }) => {
  console.log(name);
  const ImageBaseUrl = "https://image.tmdb.org/t/p/w1280";
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push(`/show_detail?id=${id}&name=${name}`)}
      className={style.Image}
      src={`${ImageBaseUrl + imgsrc}`}
      alt={name}
      width="300px"
      height="350px"
      priority
    />
  );
};

export default Similar;
