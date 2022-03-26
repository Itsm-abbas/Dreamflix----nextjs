import React, { useContext } from "react";
import Head from "next/head";
import { AppContext } from "../context/ListContextProvider";
import Movie from "../Components/Movie_Box";
import Show from "../Components/TvShow_Box";
import style from "../styles/movieBox.module.css";
const List = () => {
  const MyList = useContext(AppContext);
  const { movieslist, showslist } = MyList;

  return (
    <>
      <Head>
        <title>Dreamflix -- List</title>
      </Head>
      <div className={style.container}>
        {movieslist &&
          movieslist.map((item) => {
            return (
              <Movie
                key={item.id}
                id={item.id}
                imgsrc={item.poster_path}
                name={item.name}
              />
            );
          })}
        {showslist &&
          showslist.map((item) => {
            return (
              <Show
                key={item.id}
                id={item.id}
                imgsrc={item.poster_path}
                name={item.name}
              />
            );
          })}
        {showslist.length == 0 && movieslist.length == 0 && (
          <h1>List is empty</h1>
        )}
      </div>
    </>
  );
};

export default List;
