import React, { useState, useEffect, useContext } from "react";
import Grid from "../../components/Grid";
import { urls } from "../../utils/urls";
import { CatalogueContainerProps } from "../../utils/types";
import { LanguageContext } from "../../contexts/LanguageContext";
import language from "./lang";

const CatalogueContainer: React.FC<CatalogueContainerProps> = props => {
  const [state, changeState] = useState({
    loading: false,
    movies: [],
    currentPage: props.page
  });

  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    var url = "";
    if (props.id) {
      const id = "&with_genres=" + props.id;
      url =
        urls.domain +
        "discover/movie" +
        urls.apikey +
        "&page=" +
        state.currentPage +
        id +
        "&language=" +
        lang;
    } else if (
      props.genre ||
      props.sort ||
      props.order ||
      props.rating ||
      props.keyword
    ) {
      const genre = props.genre !== "" ? `&with_genres=${props.genre}` : "";
      const sort = "&sort_by=" + `${props.sort || "popularity"}`;
      const order = props.order ? "." + props.order : ".desc";
      const rating =
        props.rating !== "" ? `&vote_average.gte=${props.rating}` : "";
      const keyword =
        props.keyword !== "" ? `&with_keywords=${props.keyword}` : "";

      url =
        urls.domain +
        "discover/movie" +
        urls.apikey +
        genre +
        sort +
        order +
        rating +
        keyword +
        "&page=" +
        state.currentPage +
        "&vote_count.gte=100" +
        "&language=" +
        lang;
    } else {
      url =
        urls.domain +
        "movie/now_playing" +
        urls.apikey +
        "&page=" +
        state.currentPage +
        "&language=" +
        lang;
    }
    fetch(url)
      .then(response => response.json())
      .then(movies =>
        changeState({
          loading: false,
          movies: movies.results,
          currentPage: props.page
        })
      );
  }, [props, state.currentPage]);

  if (state.loading) {
    //@ts-ignore
    return <div>{language["loading"][lang]}</div>;
  }
  if (state.movies.length === 0) {
    //@ts-ignore
    return <div>{language["noInfo"][lang]}</div>;
  }
  return (
    <>
      <Grid arr={state.movies} />
    </>
  );
};

export default CatalogueContainer;
