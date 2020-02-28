import React from 'react';
import ItemCard from './ItemCard';


const ItemList = ({items, clickChange}) => {
	const itemComponent = items.map((user, i) => {
		return(
			<ItemCard name={items[i]} clickChange={clickChange} />
		);
	})
	return(

		<div>
			{itemComponent}
		</div>

	);
}

export default ItemList;