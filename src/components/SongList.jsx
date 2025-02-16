import React from "react";
import SongItem from "./SongItem";

const SongList = () => {
  return (
    <div className="song-list">
      <SongItem />

      <p className="song-list-see-more">Ver mais</p>
    </div>
  );
};

export default SongList;
