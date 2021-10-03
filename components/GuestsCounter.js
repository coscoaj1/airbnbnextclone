import React, { useReducer } from 'react';

const initialCount = { count: 0 };

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

function GuestsCounter() {
	const [state, dispatch] = useReducer(reducer, initialCount);
	return (
		<div className="flex gap-3 items-center">
			{state.count > 0 && (
				<button
					onClick={(e) => {
						e.preventDefault();
						dispatch({ type: 'decrement' });
					}}
				>
					-
				</button>
			)}
			{state.count}
			<button
				onClick={(e) => {
					e.preventDefault();
					dispatch({ type: 'increment' });
				}}
			>
				+
			</button>
		</div>
	);
}

export default GuestsCounter;
