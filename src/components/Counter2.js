import React, { Component } from 'react';

class Counter2 extends Component {

	constructor(props) {
		super(props)
		this.state = {
			candy: 0,
			icecream:0
		}

	}

	incrementCandy = () => {
			
		this.setState({
			candy: this.state.candy + 1
		})
	}

	incrementIceCream = () => {
			
		this.setState({
			icecream: this.state.icecream + 1
		})
	}

	handleSubmit = () => {
		alert(`Candy: ${this.state.candy} Ice Cream: ${this.state.icecream}`)
		console.log(`Candy: ${this.state.candy} Ice Cream: ${this.state.icecream}`)
		
	}


	render() {
		return(
			<div>
				<div>Candy - {this.state.candy}</div>
				<button onClick ={() => this.incrementCandy()}>Increment candy</button>
				<div>Ice Cream - {this.state.icecream}</div>
				<button onClick ={() => this.incrementIceCream()}>Increment icecream</button>
			

				<button type= "submit" onClick={this.handleSubmit} >Submit</button>
				
			</div>
		);
	}
}

export default Counter2;