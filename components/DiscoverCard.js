import React from 'react';
import Image from 'next/image'

function DiscoverCard({ card }) {
	return (
		<div className="h-auto w-full" key={card.name}>
			<Image className="rounded-md w-full " src={card.img} alt="" />
			<ul>
				<li className="text-lg leading-6">{card.title}</li>
				<li className="text-sm font-light">{card.description}</li>
			</ul>
		</div>
	);
}

export default DiscoverCard;
