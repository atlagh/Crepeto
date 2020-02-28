import React, {Component} from 'react';
import SearchBar from './OrderComponents/SearchBar';
import Scroll from './OrderComponents/Scroll';
import ItemCard from './OrderComponents/ItemCard';
import ItemList from './OrderComponents/ItemList';
import Selected from './OrderComponents/Selected';
import {Items} from './OrderComponents/Items';
import './Order.css';


class Order extends Component {

	constructor () {

		super()
		this.state = {
			list: Items,
			search: '',
			selected: [],
		}
	}

	onSearchChange = (event) => { 
		this.setState({search: event.target.value})
	}

	

	onClick = (name) => {
		
		this.setState({ 
		  selected: this.state.selected.concat(name)
		})
		console.log(this.state.value)
	}

	
	onXClick = (event) => {
		const index = this.state.selected.indexOf(event.target.value);
		this.setState({ 
		  selected: this.state.selected.filter((_, i) => i !== index)
		})

	}


	render () {
		const filterFriends = this.state.list.filter(list=>{
			return list.name.toLowerCase().includes(this.state.search.toLowerCase())
		});

		


		return(
			<article className="wrapper">
				<main className="wrapper2 br3">
					<div className="choice1">
						<Selected choice={this.state.selected} clickChange={this.onXClick}/>
					</div>

					<div className="choice2 center">
						<SearchBar searchChange={this.onSearchChange}/>
					</div>

					<div className="choice3">
						<ItemList items={filterFriends} clickChange={this.onClick} add={this.onAddItem}/>
					</div>
					<div className="center mt3">
						<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3" type="submit" value="Confirm"/>
					</div>
				</main>
			</article>
		)
	}
}
export default Order;