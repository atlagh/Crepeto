import React, {Component} from 'react';
import SearchBar from './OrderComponents/SearchBar';
import Scroll from './OrderComponents/Scroll';
import ItemCard from './OrderComponents/ItemCard';
import {Items} from './OrderComponents/Items';
import './Order.css';


class Order extends Component {

	constructor () {

		super()
		this.state = {
			list: '',
			search: '',
			added: '',
		}
	}

	onSearchChange = (event) => { 
		this.setState({search: event.target.value})
		console.log(this.state.search)
	}



	render () {
		return(
			<article className="wrapper">
				<main className="wrapper2">
					<div className="choice1">
					</div>

					<div className="choice2 center">
						<SearchBar searchChange={this.onSearchChange}/>
					</div>

					<div className="choice3">
						<Scroll>
						<ItemCard name={Items}/>
						</Scroll>
					</div>
				</main>
			</article>
		)
	}
}
export default Order;