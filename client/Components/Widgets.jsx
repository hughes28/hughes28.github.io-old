import React from 'react';
import axios from 'axios';
import Weather from './Weather';

export default class Widgets extends React.Component{
	constructor() {
		super();
		this.state = {loading: true};
	}
	render(){
		return <Weather/>;
	}
}
