import React from "react";
import "./ProductCard.css";

function ProductCard({
  index,
  presentImage,
  download,
  views,
  likes,
  imageUrl,
  user,
}) {
  return (
    <div className="productCard">
      <img
        src={imageUrl}
        alt={imageUrl}
        onClick={() => {
          presentImage(index);
        }}
      />
      <h1>{user}</h1>

      <div className="ratings">
        <div className="views">
          <span className="fa fa-eye"></span>
          <span>{views}</span>
        </div>

        <div className="likes">
          <span className="fa fa-heart"></span>
          <span>{likes}</span>
        </div>
        <a id="download" href={download}>
          download
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
