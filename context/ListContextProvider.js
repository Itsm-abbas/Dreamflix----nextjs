import React, { createContext, useContext, useState } from "react";
export const AppContext = createContext();
const ListContextProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [movieslist, setMoviesList] = useState([]);
  let [showslist, setShowsList] = useState([]);
  return (
    <AppContext.Provider
      value={{ movieslist, setMoviesList, showslist, setShowsList }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default ListContextProvider;
