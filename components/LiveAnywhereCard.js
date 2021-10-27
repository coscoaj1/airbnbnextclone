import React from 'react';
import Image from 'next/image';

function LiveAnywhereCard({ card }) {
	return (
		<div
			id="card"
			className=" row-span-full col-auto font-bold h-auto"
			key={card.name}
		>
			<div>
				<Image
					className="rounded md:h-auto md:w-full h-auto w-full sm:h-52"
					src={card.img}
					alt=""
					width={500}
					height={500}
				/>
			</div>
			<p className="text-lg text-center sm:text-left">{card.title}</p>
		</div>
	);
}

export default LiveAnywhereCard;
