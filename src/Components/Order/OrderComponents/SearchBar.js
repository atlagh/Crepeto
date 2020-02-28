import React from 'react';
import './SearchBar.css';

const SearchBar = ({searchChange})=> {
	return(
		<div>
			<input 
				className="grow searchBox"
				type='search'
				placeholder='Search Item'
				onChange= {searchChange}
			/>
		</div>
	);

}
export default SearchBar;