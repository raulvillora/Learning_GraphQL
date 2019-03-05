import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';

// const axiosGitHub = axios.create({
// 	baseURL: 'https://api.github.com/graphql',
// 	headers: {
// 		Authorization: 'bearer YOUR_GITHUB_PERSONAL_ACCESS_TOKEN'
// 	}
// });

export default class App extends Component {

  state = {
    path: '',//Add path to search
  };
  
	componentDidMount() {
		//fetch data
	}

	onChange = (event) => {
		this.setState({
			path: event.target.value
		});
  };
  
  onSubmit = (event) => {
    //fetch data
    event.preventDefault();
  };

	render() {
    const{ path } = this.state;
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<label htmlFor="url" style={{fontFamily: "Avenir", paddingTop: "3vh"}}>Showing open issues for https://github.com/raulvillora/ </label>
					<input id="url" type="text" onChange={this.onChange} value={ path } style={{ width: '330px' }} />
					<button type="submit">Search</button>
				</form>
				<hr />
			</div>
		);
	}
}
