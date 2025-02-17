import React from "react";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Player = ({ duration }) => {
  return (
    <div className="player">
      <div className="player-controllers">
        <Link to="/song/2">
          <FontAwesomeIcon className="player-icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player-icon player-icon--play"
          icon={faCirclePlay}
        />

        <Link to="/song/3">
          <FontAwesomeIcon className="player-icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player-progress">
        <p>00:00</p>

        <div className="player-bar">
          <div className="player-bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Player;
