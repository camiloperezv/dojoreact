import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props){
		super(props)
		this.change = this.change.bind(this)
		this.check = this.check.bind(this)
	}
	change(e){
		this.props.handleFilterTextInput(e)
	}
	check(cb){
		const target = cb.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
		console.log('value',value)
		this.props.handleInStockInput(value)
	}
	render(){
		return(
			<div>
			<input type="text" onChange={this.change}/>
			<input type="checkbox" onClick={this.check}/>
			</div>
		)
	}
}