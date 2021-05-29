import React from "react";
import PropTypes from "prop-types";
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifsCategory = ({ category }) => {

    
    const {data:gifs, isLoading }  =useFetchGifs(category);

  return (
    <div className="animate__animated animate__bounce">
          <h2>{category}</h2>
          {
              isLoading &&<div className="loader"></div>
          }
      <div className="card-grid">
        {gifs?.map((item) => {
          return <GifItem key={item.id} {...item}></GifItem>;
        })}
      </div>
    </div>
  );
};

GifsCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifsCategory;
