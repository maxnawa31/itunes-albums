import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const CardComponent = (props) => {
  return (
    <div className="individual-album">
      <Link to ={props.linkSrc} >
        <img
          className="album-cover"
          src={props.src}
          alt=""
        />
        <p className="artist-text">{props.artistText}</p>
        <p className="album-text">{props.albumText}</p>
      </Link>
    </div>
  );
};

export default CardComponent;
