import React, { Component } from 'react';
import SearchBar from '../container/search_bar';
import WeatherList from '../container/weather_list';

export default class App extends Component {
  render() {
    console.log(SearchBar);
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
