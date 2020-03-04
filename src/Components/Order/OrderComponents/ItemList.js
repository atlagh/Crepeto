import React from 'react';
import ItemCard from './ItemCard';
import './ItemList.css';


const ItemList = ({items, clickChange}) => {
	const itemComponent = items.map((user, i) => {
		return(
			<ItemCard name={items[i]} clickChange={clickChange} />
		);
	})
	return(

		<div className="flx">
			{itemComponent}
		</div>

	);
}

export default ItemList;