import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Nav from "./Nav";
import Search from "./Search";
import PhotoContainer from "./PhotoContainer";
import apiKey from "./config";
import axios from "axios";


export default class App extends Component {
  // each link has their own state
  state = {
    a320: [],
    lufthansa: [],
    efa: [],
    search: []
}
  // each link has own method for making API call
  componentDidMount() {
    this.searchA320();
    this.searchLufthansa();
    this.searchEFA();
    this.searchPhotos();
  }

  searchA320 = (query = "A320") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          a320: response.data.photos.photo,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  searchLufthansa = (query = "deutsche-lufthansa") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          lufthansa: response.data.photos.photo,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  searchEFA = (query = "european-flight-academy") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          efa: response.data.photos.photo,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  searchPhotos = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          search: response.data.photos.photo,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Search search={this.searchPhotos}/>
          <Nav />

          <Switch>
            <Route exact path="/" render={() => <Redirect to="/a320" />} />
            <Route
              path="/a320"
              render={() => <PhotoContainer data={this.state.a320} />}
            />
            <Route
              path="/lufthansa"
              render={() => <PhotoContainer data={this.state.lufthansa} />}
            />
            <Route
              path="/efa"
              render={() => <PhotoContainer data={this.state.efa} />}
            />
              <Route
              exact path="/search/:query" 
              render={() => <PhotoContainer data={this.state.search} />}
            />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}