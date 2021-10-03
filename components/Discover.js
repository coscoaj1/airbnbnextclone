import React from 'react';
import DiscoverCard from './DiscoverCard';
import goatImg from '../public/images/goatImg.jpg';
import tabletImg from '../public/images/tabletImg.jpg';
import kayakImg from '../public/images/kayakImg.jpg';

const discoverList = [
	{
		img: goatImg,
		title: 'Experiences',
		description: 'Find unforgettable activities near you.',
	},
	{
		img: tabletImg,
		title: 'Online Experiences',
		description: 'Live, interactive activites led by Hosts.',
	},
	{
		img: kayakImg,
		title: 'Outdoor collection',
		description: 'Experiences that immerse you in nature.',
	},
];

function Discover() {
	return (
		<div className="my-8 mx-auto max-w-7xl">
			<h2 className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold">
				Discover things to do
			</h2>
			<div className="flex flex-row gap-4 items-center justify-center ">
				{discoverList.map((card) => (
					<DiscoverCard key={card.title} card={card} />
				))}
			</div>
		</div>
	);
}

export default Discover;
