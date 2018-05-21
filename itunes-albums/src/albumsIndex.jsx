import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default class AlbumsIndex extends Component {
  componentDidMount() {
    if (!this.props.currentState) {
      fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
        .then(res => res.json())
        .then((result) => {
          const firstHalf = result.feed.entry.slice(0, Math.ceil(result.feed.entry.length / 2));
          const secondHalf = result.feed.entry.slice(Math.ceil(result.feed.entry.length / 2), result.feed.entry.length);
          this.props.setAlbumState(firstHalf, secondHalf);
          this.props.setHasData();
        });
    }
    window.scrollTo(0, 0);
  }
  render() {
    let albumsFirstHalf = '';
    if (this.props.firstHalfOfAlbums !== null) {
      albumsFirstHalf = this.props.firstHalfOfAlbums.map((album, index) => {
        return (
          <div className="individual-album">
            <Link to ={`/albums/${index}`} >
              <img
                className="album-cover"
                src={`${album['im:image'][2]['label']}`}
                alt=""
              />
              <p className="artist-text">{album['im:artist']['label']}</p>
              <p className="album-text">{album['im:name']['label']}</p>
            </Link>
          </div>
        );
      });
    }
    return (
      <div>
        <h1 className="headline">Top 100 Albums</h1>
        <div className="album-container">{albumsFirstHalf}</div>
        <div className="link-to-next">
          <Link to = "/second-half">Click here to see next 50 albums</Link>
        </div>
      </div>
    );
  }
}

