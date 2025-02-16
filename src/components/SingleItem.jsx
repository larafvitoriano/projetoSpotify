import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SingleItem = ({ id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${id}`} className="single-item">
      <div className="single-item-img-button">
        <div className="single-item-img">
          <img
            src={image}
            alt={`Imagem do Artista ${name}`}
            className="single-item-image"
          />
        </div>

        <FontAwesomeIcon className="single-item-icon" icon={faCirclePlay} />
      </div>

      <div className="single-item-text">
        <div className="single-item-2lines">
          <p className="single-item-title">{name}</p>
        </div>

        <p className="single-item-type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};

export default SingleItem;
