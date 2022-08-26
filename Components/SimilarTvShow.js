import React from "react";
import style from "../styles/similar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const Similar = ({ id, imgsrc, name }) => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push(`/TvShowDetail?id=${id}`)}
      className={style.Image}
      src={imgsrc}
      alt={name}
      width="300px"
      height="350px"
      priority
    />
  );
};

export default Similar;
