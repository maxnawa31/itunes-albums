import React, { Component } from 'react';
import './App.css';

export default class AlbumShowPage extends Component {
  render() {
    let foundAlbum = 'loading...';
    if (this.props.index <= 49) {
      foundAlbum = this.props.firstHalfOfAlbums.filter((album,index) => {
        return index === parseInt(this.props.index);
      })[0];
    } else if(this.props.index > 49) {
      foundAlbum = this.props.secondHalfOfAlbums.filter((album,index) => {
        return index === parseInt(this.props.index) - 50;
      })[0];
    }
    return (
      <div className="album-show">
        <div>
          Artist: {foundAlbum['im:artist']['label']}
        </div>
        <div>
          Genre: {foundAlbum['category']['attributes']['term']}
        </div>
          Album: {foundAlbum['im:name']['label']}
        <div>
          Price : {foundAlbum['im:price']['label']}
        </div>
        <div>
          <img src={`${foundAlbum['im:image'][2]['label']}`} alt="" />
        </div>
      </div>
    );
  }
}
