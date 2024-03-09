import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Lazy = ({ src, className, height, width, style }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt=""
      effect="blur"
      src={src}
      height={height}
      width={width}
      style={style}
    />
  );
};

export default Lazy;
