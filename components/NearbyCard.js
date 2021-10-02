import React from 'react';
import Image from 'next/image';

export default function NearbyCard({ card }) {
	return (
		<div className=" flex flex-row  text-smlr my-5  " key={card.name}>
			<Image
				className="rounded-md"
				src={card.img}
				alt=""
				width={60}
				height={60}
			/>
			<div className="flex items-center ml-3">
				<ul>
					<li className="font-normal">{card.name}</li>
					<li className="font-light">{card.drive}</li>
				</ul>
			</div>
		</div>
	);
}
