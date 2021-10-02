import axios from 'axios';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import globe from '../public/images/icons8-globe-50.png';
import blackGlobe from '../public/images/icons8-globe-24.png';
import userIcon from '../public/images/profile-user.png';
import menuIcon from '../public/images/icons8-menu-24.png';
import logo from '../public/images/airbnb-48.ico';
import redLogo from '../public/images/airbnb-red-icon.png';
import searchIcon from '../public/images/search-12-32.png';
import locationicon from '../public/images/locationicon.png';

const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

const handleClick = (e) => {
	e.preventDefault();
};
//GET city http formatting:
//?countryIds=US&minPopulation=100000&namePrefix=L

function Header() {
	const [cities, setCities] = useState(null);
	const [input, setInput] = useState('');
	const [navbar, setNavbar] = useState(false);

	// const hook = () => {
	// 	const config = {
	// 		headers: {
	// 			'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
	// 			'x-rapidapi-key': `${process.env.REACT_APP_CITY_API_KEY}`,
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

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeHeader);
		return () => window.removeEventListener('scroll', changeHeader);
	});

	const changeHeader = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	return (
		<div className={navbar ? 'navbar-active' : 'navbar'}>
			<header className="max-w-7xl mx-auto">
				<div className="flex flex-row  w-full">
					<div className="flex-5 flex flex-row items-center">
						<div className={navbar ? 'ml-8 mt-2' : 'flex ml-8'}>
							<Image
								src={navbar ? redLogo : logo}
								width={32}
								height={32}
								alt="logo"
							/>
						</div>
						<div className="hidden md:block font-semibold text-lg pl-1">
							airbnb
						</div>
					</div>
					<div className="flex-6 w-84">
						<button
							className={
								navbar
									? 'flex justify-between items-center my-3 py-2 px-2 rounded-full border border-gray-300 shadow-md text-xs font-normal'
									: 'hidden'
							}
						>
							<span className="font-light pl-2">Start your search</span>
							<span className="bg-red-500 relative rounded-full w-6 h-6 ml-20">
								<div className="relative w-3 top-1.5 left-1.5">
									<Image src={searchIcon} />
								</div>
							</span>
						</button>
					</div>
					<div className="flex items-center justify-end flex-5">
						<button className="mx-3 pt-1 text-xs">Become a host</button>
						<button>
							<div
								className="w-4 mr-3 pt-2
							"
							>
								<Image src={navbar ? blackGlobe : globe} alt="globe icon" />
							</div>
						</button>
						<div className="flex flex-row mr-6 bg-white rounded-full border items-center">
							<button className="w-4 pt-1 ml-2 z-10">
								<Image src={menuIcon} alt="" />
							</button>
							<button className="w-5 mx-2 mt-1">
								<Image src={userIcon} alt="" />
							</button>
						</div>
					</div>
				</div>

				<div className={navbar ? 'navsearch-active' : 'navsearch'}>
					<button className="mx-8">
						<span>Places to stay</span>
					</button>
					<button className="mx-8">Experiences</button>
					<button className="mx-8">Online Experiences</button>
				</div>
				<form>
					<div className={navbar ? 'formdiv-active' : 'formdiv'}>
						<div className="flex flex-col justify-center h-full ml-4 pr-2 group btn-header ">
							<p>Location</p>
							<input
								onChange={handleChange}
								type="text"
								className="group-hover:bg-gray-200 outline-none"
								placeholder="Where are you going?"
							></input>
						</div>
						<div className="bdr-header"></div>
						<button className="btn-header" onClick={handleClick}>
							<ul>
								<li>Check in</li>
								<li className="font-light">Add dates</li>
							</ul>
						</button>
						<div className="bdr-header"></div>
						<button className="btn-header" onClick={handleClick}>
							<ul>
								<li>Check out</li>
								<li className="font-light">Add dates</li>
							</ul>
						</button>
						<div className="bdr-header"></div>
						<button className="btn-header" onClick={handleClick}>
							<ul>
								<li>Guests</li>
								<li className="font-light">Add guests</li>
							</ul>
						</button>
						<button className="mr-2">
							<div className="bg-red-500 relative rounded-full w-10 h-10">
								<div className="absolute top-3.5 left-3.5">
									<Image
										width={16}
										height={16}
										src={searchIcon}
										alt="search icon"
									/>
								</div>
							</div>
						</button>
					</div>
				</form>
			</header>
			{input.length > 0 ? (
				<div className="absolute ml-40 transform translate-x-2 bg-white shadow-lg rounded-2xl w-1/3 p-2 mt-2 text-black text-base font-light">
					<ul>
						{cities.map((city) => {
							return (
								<li className="flex flex-row items-center">
									<img
										src={locationicon}
										className="w-8 m-1 p-2 border border-gray-200"
										alt=""
									></img>

									<p>{city.city}</p>
								</li>
							);
						})}
					</ul>
				</div>
			) : null}
		</div>
	);
}

export default Header;
