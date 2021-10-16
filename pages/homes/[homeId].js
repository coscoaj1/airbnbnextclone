import React from 'react';
import { useRouter } from 'next/router';

function homeDetail() {
	const router = useRouter();
	const homeId = router.query.homeId;
	return <h1 className="text-4xl font-medium">Details about home {homeId}</h1>;
}

export default homeDetail;
