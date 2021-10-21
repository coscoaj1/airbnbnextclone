import React from 'react';

export default function FlexibleButton() {
	return (
		<button
			onClick={() => {}}
			className=" bg-white rounded-full m-2 py-3 sm:py-5
            font-bold text-lg text-fuchsia-700 shadow-md 
            active:scale-90 transform duration-200 hover:shadow-3xl "
		>
			<span className="px-8 sm:px-12">{"I'm flexible"}</span>
		</button>
	);
}
