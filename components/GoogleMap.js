import React, { useEffect, useRef } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import mapStyle from '../styles/mapStyle';

const render = (status) => {
	if (status === Status.LOADING) return <h3>{status} ..</h3>;
	if (status === Status.FAILURE) return <h3>{status} ...</h3>;
	return null;
};

function MyMapComponent({ center, zoom }) {
	const mapOptions = {
		zoom: zoom,
		center: center,
		mapTypeId: 'roadmap',
		styles: mapStyle,
	};
	const ref = useRef();

	useEffect(() => {
		new window.google.maps.Map(ref.current, mapOptions);
	});

	return <div ref={ref} className="w-full h-auto mx-6" />;
}

function GoogleMap({ center, zoom }) {
	return (
		<Wrapper
			apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
			render={render}
		>
			<MyMapComponent center={center} zoom={zoom} />
		</Wrapper>
	);
}

export default GoogleMap;
