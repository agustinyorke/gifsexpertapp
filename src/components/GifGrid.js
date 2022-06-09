import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ categoria }) => {
  const { images, loading } = useFetchGifs(categoria);

  console.log(loading);

  return (
    <>
      <h3>{categoria}</h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
