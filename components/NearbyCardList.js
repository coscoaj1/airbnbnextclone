import React from 'react';
import Image from 'next/image';
import NearbyCard from './NearbyCard';
import AtlantaImg from '../public/images/Atlanta.webp';
import AshevilleImg from '../public/images/Asheville.webp';
import BooneImg from '../public/images/Boone.webp';
import GatlinburgImg from '../public/images/Gatlinburg.webp';
import HiltonHeadImg from '../public/images/HiltonHead.webp';
import MyrtleBeachImg from '../public/images/MyrtleBeach.webp';
import NashvilleImg from '../public/images/Nashville.webp';
import SavannahImg from '../public/images/savannahimg.jpg';

const nearbyList = [
	{
		img: AtlantaImg,
		name: 'Atlanta',
		drive: '4.5 hour drive',
	},
	{
		img: AshevilleImg,
		name: 'Asheville',
		drive: '30 minute drive',
	},
	{
		img: BooneImg,
		name: 'Boone',
		drive: '2 hour drive',
	},
	{
		img: GatlinburgImg,
		name: 'Gatlinburg',
		drive: '1.5 hour drive',
	},
	{
		img: HiltonHeadImg,
		name: 'Hilton Head',
		drive: '4.5 hour drive',
	},
	{
		img: MyrtleBeachImg,
		name: 'Myrtle Beach',
		drive: '5.5 hour drive',
	},
	{
		img: NashvilleImg,
		name: 'Nashville',
		drive: '4.5 hour drive',
	},
	{
		img: SavannahImg,
		name: 'Savannah',
		drive: '6 hour drive',
	},
];

export default function NearbyCardList() {
	return (
		<div className="relative mt-4 mx-auto h-full max-w-7xl">
			<p className="text-lg sm:text-xl md:text-3xl font-bold">Explore Nearby</p>
			<div
				id="cardlist"
				className="relative grid  gap-x-3 grid-cols-2 sm:grid-cols-3 
				lg:grid-cols-4 grid-rows-2 lg:grid-rows-2 "
			>
				{nearbyList.map((card) => (
					<NearbyCard key={card.name} card={card} />
				))}
			</div>
		</div>
	);
}
