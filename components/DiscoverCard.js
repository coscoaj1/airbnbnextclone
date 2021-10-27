import React from 'react';
import Image from 'next/image';

function DiscoverCard({ card }) {
	return (
		<div className="h-auto w-full" key={card.name}>
			<Image
				className="rounded-md w-full"
				height={400}
				width={400}
				layout="responsive"
				src={card.img}
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
