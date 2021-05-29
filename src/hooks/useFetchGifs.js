import { useState, useEffect } from "react";
import getGifs from "../utils/getGifs";


const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    getGifs(category).then((data) => {
        setstate({
            data: data,
            isLoading: false,
          })
    });
  }, [category]);

  return state;
};

export default useFetchGifs;
