import React from "react";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SongList from "../components/SongList";

const Artist = () => {
  return (
    <div className="artist">
      <div className="artist-header">
        <h2 className="artist-title">Artista</h2>
      </div>

      <div className="artist-body">
        <h2>Populares</h2>
        <SongList />
      </div>

      <Link to="/song/1">
        <FontAwesomeIcon
          className="single-item-icon single-item-icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
