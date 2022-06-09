import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    images: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(categoria).then((imgs) => {
      setState({
        images: imgs,
        loading: false,
      });
    });
  }, [categoria]);

  return state;
};
