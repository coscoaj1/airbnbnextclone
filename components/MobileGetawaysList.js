import React from 'react';
import NearbyCard from './NearbyCard';

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
