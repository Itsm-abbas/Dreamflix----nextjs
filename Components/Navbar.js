import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "../styles/navbar.module.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [search, setSearch] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    if (search != "") {
      router.push(`/search_result?search=${search}`);
    } else return;
    setToggle(false);
    setSearch("");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`${style.hamburger__container} ${
          toggle ? "navbar_hide__0Bu7w" : ""
        } ${scroll && "scroll__change"}`}
      >
        <Image src={"/logo.svg"} width="120px" height="30px" alt={"logo"} />
        <button
          className={style.hamburger__btn}
          onClick={() => setToggle(true)}
        >
          <FaBars />
        </button>
      </div>
      <nav
        className={`${style.navbar} ${toggle ? "navbar_visible__VU3jy" : ""}  ${
          scroll && "scroll__change"
        }`}
      >
        <div className={style.nav__left}>
          <button onClick={() => setToggle(false)} className={style.cross__btn}>
            <FaTimes />
          </button>
          <Link href={"/"}>
            <a>
              <Image
                src={"/logo.svg"}
                width="120px"
                height={"30px"}
                alt="logo"
              />
            </a>
          </Link>
          <ul className={style.nav__left__list}>
            <Link href={"/"} passHref>
              <a onClick={() => setToggle(false)}>Home</a>
            </Link>
            <Link href={"/shows"} passHref>
              <a onClick={() => setToggle(false)}>TV Shows</a>
            </Link>
            <Link href={"/movies"} passHref>
              <a onClick={() => setToggle(false)}>Movies</a>
            </Link>

            <Link href={"/list"} passHref>
              <a onClick={() => setToggle(false)}>My List</a>
            </Link>
          </ul>
        </div>
        <div className={style.nav__right}>
          <div className={style.search__box}>
            <form onSubmit={formHandler} className={style.form}>
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className={style.search__input}
                type="text"
                name="search"
              />
              <button className={style.search__btn} type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
