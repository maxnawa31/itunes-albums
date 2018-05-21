import React, { Component } from 'react';
import './App.css';
import AlbumsIndex from './albumsIndex';
import { Route, Link, Switch } from 'react-router-dom';
import SecondHalf from './SecondHalf';
import AlbumShowPage from './AlbumShowPage';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstHalf: null,
      secondHalf: null,
      hasData: false,
    };
    this.getAllAlbums = this.getAllAlbums.bind(this);
    this.setHasData = this.setHasData.bind(this);
  }
  getAllAlbums(firstHalf, secondHalf) {
    this.setState({
      firstHalf,
      secondHalf,
    });
  }
  setHasData() {
    this.setState({ hasData: true });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/albums/:id"
            component={props => (
              <AlbumShowPage
                index={props.match.params.id}
                firstHalfOfAlbums={this.state.firstHalf}
                secondHalfOfAlbums={this.state.secondHalf}
              />
            )}
          />
          <Route
            path="/second-half"
            component={props => (
              <SecondHalf
                secondHalfOfAlbums={this.state.secondHalf}
                setHasData={this.setHasData}
                currentState={this.state.hasData}
                setAlbumState={this.getAllAlbums}
                firstHalfOfAlbums={this.state.firstHalf}
              />
            )}
          />
          <Route
            path="/"
            exact
            component={props => (
              <div>
                <AlbumsIndex
                  setHasData={this.setHasData}
                  currentState={this.state.hasData}
                  setAlbumState={this.getAllAlbums}
                  firstHalfOfAlbums={this.state.firstHalf}
                />
              </div>
        )}
          />
        </Switch>
      </div>

    );
  }
}
