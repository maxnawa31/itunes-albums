import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SecondHalf extends Component {
  componentDidMount() {
    if (!this.props.currentState) {
      fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
        .then(res => res.json())
        .then((result) => {
          const firstHalf = result.feed.entry.slice(0, Math.ceil(result.feed.entry.length / 2));
          const secondHalf = result.feed.entry.slice(Math.ceil(result.feed.entry.length / 2), result.feed.entry.length);
          this.props.setAlbumState(firstHalf, secondHalf);
          this.props.setHasData();
          console.log(result);
        });
    }
    window.scrollTo(0, 0);
  }

  render() {
    let secondHalfAlbums = 'loading';
    let nextLink = '';
    if (this.props.secondHalfOfAlbums !== null) {
      secondHalfAlbums = this.props.secondHalfOfAlbums.map((album, index) => {
        return (
          <div className="individual-album">
            <Link to ={`/albums/${index + 50}`} >
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
      nextLink = <Link to="/">Click here to see the first 50 albums</Link>;
    }

    return (
      <div>
        <h1 className="headline">Top 100 Albums</h1>
        <div className="album-container">{secondHalfAlbums}</div>
        <div className="link-to-next">
          {nextLink}
        </div>
      </div>
    );
  }
}
