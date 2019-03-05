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
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="url">
            Showing open issues for https://github.com/raulvillora
          </label>
          <input id="url"
            type="text"
            onChange={this.onChange}
            style={{ width: '330px' }}/>
            <button type="submit">Search</button>
        </form>
        <hr />
      </div>
    );
  }
}