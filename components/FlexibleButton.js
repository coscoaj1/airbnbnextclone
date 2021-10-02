import React from 'react';

export default function FlexibleButton() {
	return (
		<button
			onClick={() => {
				console.log('clicked');
			}}
			className="active:scale-150 bg-white rounded-full px-6 sm:px-10 py-2 sm:py-3 m-2 
            font-bold text-fuchsia-700 shadow-md 
            transition duration-200 hover:shadow-3xl "
		>
			I'm flexible
		</button>
	);
}
