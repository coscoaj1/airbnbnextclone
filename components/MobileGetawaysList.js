import React from 'react';
import NearbyCard from './NearbyCard';
import AtlantaImg from '../public/images/Atlanta.webp';
import AshevilleImg from '../public/images/Asheville.webp';
import BooneImg from '../public/images/Boone.webp';
import GatlinburgImg from '../public/images/Gatlinburg.webp';
import HiltonHeadImg from '../public/images/HiltonHead.webp';
import MyrtleBeachImg from '../public/images/MyrtleBeach.webp';
import NashvilleImg from '../public/images/Nashville.webp';
import SavannahImg from '../public/images/savannahimg.jpg';
import { nearbyList } from './NearbyCardList';

export default function MobileGetawaysList() {
	return (
		<div className="flex flex-col pl-8 pt-4 font-normal">
			<h4 className="font-bold">Getaways Near You</h4>
			{nearbyList.map((card) => (
				<NearbyCard key={card.name} card={card} />
			))}
		</div>
	);
}
