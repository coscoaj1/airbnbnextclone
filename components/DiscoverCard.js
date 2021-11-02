import React from 'react';
import Image from 'next/image';

function DiscoverCard({ card }) {
	return (
		<div className="h-auto" key={card.name}>
			<Image
				className="rounded-md w-full"
				height={500}
				width={500}
				src={card.img}
				layout="intrinsic"
				alt=""
			/>
			<ul>
				<li className="text-lg font-medium leading-6">{card.title}</li>
				<li className="text-sm">{card.description}</li>
			</ul>
		</div>
	);
}

export default DiscoverCard;
