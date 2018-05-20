import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SecondHalf extends Component {
  render() {
      const secondHalfAlbums = this.props.secondHalfOfAlbums.map((album,index) => {
        return <div><Link to = {`/albums/${50 + index}`}>{50 + index + 1} {album['im:name']['label']} by {album['im:artist']['label']}</Link></div>
    })
    return(
      <div>
        <div>{secondHalfAlbums}</div>
        <Link to = '/'>Click here to go back to first 50 albums</Link>
      </div>
    )
  }
}