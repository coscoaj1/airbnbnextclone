import React from 'react';
import ChevronRight from '../icons/ChevronRight';

export default function MobileFlexibleButton() {
	return (
		<button className="flex justify-between items-center text-fuchsia-700 px-4 py-3 rounded-full font-bold shadow-md w-11/12 self-center text-left text-lg border border-gray-200 active:scale-90 transform duration-200">
			{"I'm flexible"}
			<span>
				<ChevronRight />
			</span>
		</button>
	);
}
