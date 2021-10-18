import Geocode from 'react-geocode';

function GeoCode() {
	Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

	Geocode.setLocationType('ROOFTOP');

	Geocode.fromAddress('Eiffel Tower').then(
		(response) => {
			const { lat, lng } = response.results[0].geometry.location;
			console.log(lat, lng);
			return response.data;
		},
		(error) => {
			console.error(error);
		}
	);
}

export default GeoCode;
