import React from 'react';

function DiscoverCard({ card }) {
	return (
		<div className="h-auto w-full" key={card.name}>
			<img className="rounded-md w-full " src={card.img} alt="" />
			<ul>
				<li>{card.title}</li>
				<li className="text-xs font-light">{card.description}</li>
			</ul>
		</div>
	);
}

export default DiscoverCard;
