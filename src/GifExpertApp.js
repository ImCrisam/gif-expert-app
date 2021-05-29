import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifsCategory from "./components/GifsCategory";

const GifExpertApp = () => {
  const [categorias, setcategorias] = useState(["goku", "superman"]);


  return (
    <div>
      <h2>Gif Expert App</h2>
      <AddCategory setcategorias={setcategorias}></AddCategory>
      <ol>
        {categorias?.map((item) => {
          return <GifsCategory key={item} category={item}></GifsCategory>;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
