import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AlbumsIndex extends Component {
  constructor(props) {
    super(props);
  }
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
  }
  render() {
    let albumsFirstHalf = '';
    if (this.props.firstHalfOfAlbums !== null) {
      albumsFirstHalf = this.props.firstHalfOfAlbums.map((album, index) => {
        return <div><Link to ={`/albums/${index}`}>{index + 1} {album['im:name']['label']} by {album['im:artist']['label']}</Link></div>;
      });
    }
    return (
      <div>
        <div>{albumsFirstHalf}</div>
        <div>
          <Link to = "/second-half">Click here to see next 50 albums</Link>
        </div>
      </div>
    );
  }
}

