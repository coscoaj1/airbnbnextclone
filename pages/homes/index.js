import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import SearchHeader from '../../components/SearchHeader';

function HomeListings() {
	const router = useRouter();
	const { startDate, endDate, location, totalGuests } = router.query;

	const formattedStartDate = startDate.split(',')[0];
	const formattedEndDate = endDate.split(',')[0];
	const formattedLocation = location.split(',')[0];

	return (
		<>
			<SearchHeader />
			<div className="ml-14">
				<section>
					<div className="text-sm text-gray-900">
						18 stays · {formattedStartDate} - {formattedEndDate} · {totalGuests}{' '}
						guests
					</div>
					<div className="text-3xl font-bold">Stays in {formattedLocation}</div>
					<div>home3</div>
				</section>
				<Footer />
			</div>
		</>
	);
}

export default HomeListings;
