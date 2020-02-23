import React from 'react';


const SearchBar = ({searchChange})=> {
	return(
		<div>
			<input 
				className="grow"
				type='search'
				placeholder='Search Item'
				onChange= {searchChange}
			/>
		</div>
	);

}
export default SearchBar;