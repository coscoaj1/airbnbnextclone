import axios from 'axios';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import LogoHeader from './LogoHeader';
import HeaderTabs from './HeaderTabs';
import GuestsDropDown from './GuestsDropDown';
import locationicon from '../public/images/locationicon.png';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import RangePicker from './RangePicker';

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
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState('');
	const [open, setOpen] = useState(true);

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

	const handleClickAway = () => {
		setOpen(!open);
	};

	const handleLocationSelect = () => {};

	const handleChange = (e) => {
		setInput(e.target.value);
		setOpen(true);
		console.log(cities);
		console.log(open);
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
				<LogoHeader navbar={navbar} />
				<HeaderTabs navbar={navbar} />

				<form>
					<div className={navbar ? 'formdiv-active' : 'formdiv'}>
						<div className="flex flex-col justify-center h-full ml-4 pr-2 group btn-header ">
							<p>Location</p>
							<input
								onChange={handleChange}
								type="text"
								className="group-hover:bg-gray-50 outline-none"
								placeholder="Where are you going?"
							></input>
						</div>
						<div className="bdr-header"></div>
						<div className="">
							<ul>
								<li>Check in</li>

								{/* <DateRangePicker
									selected={startDate}
									onChange={(date) => setStartDate(date)}
									endDate={endDate}
								/> */}
							</ul>
						</div>
						<div className="bdr-header"></div>
						<div className="btn-header">
							<ul>
								<li>Check out</li>
								{/* <DateRangePickerEndDate
									selected={endDate}
									startDate={startDate}
									minDate={startDate}
									onChange={(date) => setEndDate(date)}
									endDate={endDate}
								/> */}
							</ul>
						</div>
						<div className="bdr-header"></div>
						<div className="flex flex-4 my-auto focus:border-gray-300  px-2 py-1">
							<GuestsDropDown />
						</div>
					</div>
				</form>
			</header>
			{input.length > 0 ? (
				<ClickAwayListener onClickAway={handleClickAway}>
					{open ? (
						<div className="absolute ml-40 transform translate-x-2 bg-white shadow-lg rounded-2xl w-1/3 p-2 mt-2 text-black text-base font-light">
							<ul>
								{cities.map((city) => {
									return (
										<li
											key={city.city}
											className="flex flex-row items-center gap-1"
										>
											<div className="border border-gray-200 rounded-lg py-2 px-3 m-1">
												<Image
													src={locationicon}
													width={18}
													height={18}
													alt=""
												></Image>
											</div>
											<button onClick={handleLocationSelect}>
												{city.city}
											</button>
										</li>
									);
								})}
							</ul>
						</div>
					) : (
						<></>
					)}
				</ClickAwayListener>
			) : null}
			<RangePicker />
		</div>
	);
}

export default Header;
