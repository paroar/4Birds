import React from "react";

type Poster = {
  imgPath: string;
  size: "w92" | "w154" | "w185" | "w300" | "w500" | "original";
  className?: string;
};

type Profile = {
  imgPath: string;
  size: "w45" | "w185" | "h632" | "original";
  className?: string;
};

const Poster: React.FC<Poster | Profile> = props => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/` + props.size + props.imgPath}
        className={props.className}
        alt="img"
      />
    </div>
  );
};

export default Poster;