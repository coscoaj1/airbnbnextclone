const hook = () => {
	const config = {
		headers: {
			'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
			'x-rapidapi-key': `${process.env.NEXT_PUBLIC_CITY_API_KEY}`,
		},
	};

	axios
		.get(
			`${url}?limit=5&countryIds=US&minPopulation=100000&namePrefix=${input}`,
			config
		)
		.then((response) => {
			setCities(response.data.data);
		});
};

useEffect(hook, [input]);
