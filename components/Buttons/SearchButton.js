import React from 'react';

function SearchButton({ action }) {
	return (
		<button className="border border-gray-400 hover:border-black rounded-3xl px-4 py-1.5 mr-2 text-smbase">
			{action}
		</button>
	);
}

export default SearchButton;
