import React from 'react'; 
import './ItemCard.css';
 

const ItemCard = ({name}) => {
	
	return(
		<div className="cardWrapper grow pointer">
			<img src={require(`${name[0].src}`)} alt="img" width="120" height="130" className="imageWrapper tc"/>
			<div className="tc ps2">
		        <p>{name[0].name}</p>
		        <p>{name[0].price}</p>
		    </div>
	    </div>
	)
}

export default ItemCard;