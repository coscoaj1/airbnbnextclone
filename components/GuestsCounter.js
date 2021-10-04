import React, { useState, useReducer } from 'react';
import Minus from '../public/images/minus-svgrepo-com.svg';
import Plus from '../public/images/icons8-plus-+.svg';
import Image from 'next/image';

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

function GuestsCounter({ totalGuests, setTotalGuests }) {
	const [state, dispatch] = useReducer(reducer, initialCount);

	return (
		<div className="flex gap-3 items-center">
			{state.count > 0 && (
				<button
					onClick={(e) => {
						e.preventDefault();
						dispatch({ type: 'decrement' });
						setTotalGuests(totalGuests - 1);
					}}
				>
					<div className="guestsButton">
						<Minus width={29} height={29} />
					</div>
				</button>
			)}
			<div className="font-light text-xs">{state.count}</div>
			<button
				onClick={(e) => {
					e.preventDefault();
					dispatch({ type: 'increment' });
					setTotalGuests(totalGuests + 1);
				}}
			>
				<div className="guestsButton">
					<Plus height={35} width={35} />
				</div>
			</button>
		</div>
	);
}

export default GuestsCounter;
