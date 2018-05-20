import React, { Component } from 'react';

export default class ArtistTag extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return <h3>{this.props.number} {this.props.album} by {this.props.artist}</h3>
  }
}