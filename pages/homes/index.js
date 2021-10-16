import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function HomeListings() {
	const router = useRouter();
	const { startDate, endDate, location, totalGuests } = router.query;

	const formattedStartDate = startDate.split(',')[0];
	const formattedEndDate = endDate.split(',')[0];

	return (
		<div>
			<Header />
			<div className="text-lg">
				Homes available in {location} for {totalGuests} guests between{' '}
				{formattedStartDate} and {formattedEndDate}
			</div>

			<div>home2</div>
			<div>home3</div>
			<Footer />
		</div>
	);
}

export default HomeListings;
