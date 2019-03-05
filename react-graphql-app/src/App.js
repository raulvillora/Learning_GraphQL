import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const axiosGitHub = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'bearer YOUR_GITHUB_PERSONAL_ACCESS_TOKEN',
  },
});

export default class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}