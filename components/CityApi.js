// const hook = () => {
// 	const config = {
// 		headers: {
// 			'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
// 			'x-rapidapi-key': `${process.env.NEXT_PUBLIC_CITY_API_KEY}`,
// 		},
// 	};

// 	axios
// 		.get(
// 			`${url}?limit=5&countryIds=US&minPopulation=100000&namePrefix=${input}`,
// 			config
// 		)
// 		.then((response) => {
// 			setCities(response.data.data);
// 		});
// };

// useEffect(hook, [input]);

// const hook = () => {
// 	const config = {
// 		headers: {
// 			'X-CSCAPI-KEY': `${process.env.NEXT_PUBLIC_CITIES_API_KEY}`,
// 		},
// 	};
// 	axios
// 		.get('https://api.countrystatecity.in/v1/countries/US/cities', config)
// 		.then((response) => {
// 			setCities(response.data);
// 			console.log(response.data);
// 		});
// };
// useEffect(hook, [input]);

// const handleFilter = (e) => {
// 	setOpen(true);
// 	setInput(e.target.value);
// 	const newFilter = cities.filter((value) => {
// 		return value.City.toLowerCase().includes(input.toLowerCase());
// 	});
// 	setFilteredData(newFilter);
// 	console.log(filteredData);
// };
