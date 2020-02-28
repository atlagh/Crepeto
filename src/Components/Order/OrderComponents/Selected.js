import React from 'react';
import './Selected.css';

const Selected = ({choice, clickChange}) => {
	const choiceComponent = choice.map((user, i) => {
		return(
			<div className= "selectedWrap"> 
				{choice[i]} <button className="tansparent xButton" onClick={clickChange} value={choice[i]}>x</button>
			</div>
		);
	})
	return(
		<div className="selectedFlex">
			{choiceComponent}
		</div>

	)
}

export default Selected;