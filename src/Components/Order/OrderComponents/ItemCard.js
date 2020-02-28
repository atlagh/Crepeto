import React from 'react'; 
import './ItemCard.css';
 

const ItemCard = ({name, clickChange}) => {
	return(
			<button className="cardWrapper grow pointer dib br3 ma2" onClick={() => clickChange(`${name.name}`)} value={name.name}>
				<img src={require(`${name.src}`)} alt="img" width="120" height="130" className="imageWrapper"/>
				<div className="contentWrapper" >
			        <p>{name.price}</p>
			        <p>{name.name}</p>
			    </div>
		    </button>
	)
}

export default ItemCard;