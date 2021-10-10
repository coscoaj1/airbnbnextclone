import axios from 'axios';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import LogoHeader from './LogoHeader';
import HeaderTabs from './HeaderTabs';
import GuestsDropDown from './GuestsDropDown';
import locationicon from '../public/images/locationicon.png';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import RangePicker from './RangePicker';
import CancelX from '../public/images/x-svgrepo-com (1).svg';

const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

function Header() {
	const [cities, setCities] = useState(null);
	const [input, setInput] = useState('');
	const [navbar, setNavbar] = useState(false);
	const [location, setLocation] = useState('');
	const [open, setOpen] = useState(true);
	const [showCalendar, setShowCalendar] = useState(false);
	const [selectedDates, setSelectedDates] = useState([]);
	const [date] = useState(new Date());
	const [focusStart, setFocusStart] = useState(false);
	const [focusEnd, setFocusEnd] = useState(false);
	const [focusLocation, setFocusLocation] = useState(false);
	const [totalGuests, setTotalGuests] = useState(null);

	const hook = () => {
		const config = {
			headers: {
				'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
				'x-rapidapi-key': `${process.env.NEXT_PUBLIC_CITY_API_KEY}`,
			},
		};

		axios
			.get(
				`${url}?limit=5&countryIds=US&minPopulation=50000&namePrefix=${input}`,
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

	const handleLocationSelect = (city) => {
		setLocation(`${city.city}, ${city.regionCode}`);
		setOpen(false);
		setShowCalendar(!showCalendar);
		setFocusStart(true);
		setFocusLocation(false);
	};

	const handleChange = (e) => {
		setInput(e.target.value);
		setOpen(true);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeHeader);
		return () => window.removeEventListener('scroll', changeHeader);
	});

	const changeHeader = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
			setShowCalendar(false);
		} else {
			setNavbar(false);
		}
	};

	const handleShowCalendar = (e) => {
		e.preventDefault();
		setShowCalendar(!showCalendar);
		setFocusStart(true);
	};

	function _handleOnDateSelected({ selected, selectable, date }) {
		if (!selectable) return;

		let dateTime = date.getTime();
		let newDates = [...selectedDates];
		if (selectedDates.length) {
			if (selectedDates.length === 1) {
				let firstTime = selectedDates[0].getTime();
				setFocusEnd(true);
				// setShowCalendar(false);

				if (firstTime < dateTime) newDates.push(date);
				else newDates.unshift(date);

				setSelectedDates(newDates);
			} else if (newDates.length === 2) {
				setSelectedDates([date]);
			}
		} else {
			newDates.push(date);
			setSelectedDates(newDates);
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(location);
		console.log(selectedDates[0].toLocaleString().split(',')[0])
		console.log(selectedDates[1].toLocaleString().split(',')[0])
		console.log(`${totalGuests} guests`)
	};

	const sendTotal = (total) => {
		console.log(total);
		setTotalGuests(total);
	};
	return (
		<div className={navbar ? 'navbar-active' : 'navbar'}>
				{/* <header className="mx-auto border-red-500 border-1"> */}
					<LogoHeader navbar={navbar} />
					<HeaderTabs navbar={navbar} />
			<form onSubmit={handleSubmit}>

					<div className={navbar ? 'formdiv-active' : 'formdiv'}>
						<div
							className={
								focusLocation
									? 'btn-location-focus flex flex-col justify-center h-full pr-2 group w-full'
									: 'btn-header flex flex-col justify-center h-full pr-2 group w-full'
							}
						>
							<div className="font-medium">Location</div>
							<input
								onChange={handleChange}
								onFocus={() => setFocusLocation(true)}
								type="text"
								value={location ? location : input}
								className="outline-none bg-gray-50 font-medium text-sm"
								placeholder="Where are you going?"
							></input>
						</div>
						<div className="bdr-header"></div>
						<div className={focusStart ? 'btn-header-focus' : 'btn-header'}>
							<div className="font-medium">Check in</div>
							{selectedDates.length > 0 ? (
								<div className="flex items-start gap-3">
									<button
										onClick={handleShowCalendar}
										className="text-sm font-medium"
										value={selectedDates[0].toLocaleString().split(',')[0]}
									>
										{selectedDates[0].toLocaleString().split(',')[0]}
									</button>
									{selectedDates.length === 1 && <button
									className="w-6 h-6  bg-gray-200 hover:bg-gray-300 rounded-full transform -translate-y-3"
									onClick={() => setSelectedDates([])}
																>
									<CancelX width={18} height={18} className="rounded-full pl-1.5" />
									</button>}
								</div>
							) : (
								<button
									onClick={handleShowCalendar}
									className="text-sm font-light"
								>
									Add dates
								</button>
							)}
						</div>
						<div className="bdr-header"></div>
						<div className={focusEnd ? 'btn-header-focus' : 'btn-header'}>
							<div className="font-medium">Check out</div>
							{selectedDates.length > 1 ? (
								<div className="flex items-start gap-3">
									<button
										onClick={handleShowCalendar}
										className="text-sm font-medium"
										value={selectedDates[1].toLocaleString().split(',')[0]}
									>
										{selectedDates[1].toLocaleString().split(',')[0]}
									</button>
										<button
										className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full transform -translate-y-3"
										onClick={() => setSelectedDates([])}
																	>
										<CancelX width={18} height={18} className="rounded-full pl-1.5" />
										</button>
								</div>
							) : (
								<button
									onClick={handleShowCalendar}
									className="text-sm font-light"
								>
									Add dates
								</button>
							)}
						</div>
						<div className="bdr-header"></div>
						<div className="flex flex-4 my-auto focus:border-gray-300  px-2 py-1">
							<GuestsDropDown
								totalGuests={totalGuests}
								sendTotal={sendTotal}
							/>
						</div>
					</div>
				{/* </header> */}
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
												<div className="border border-gray-200 bg-gray-100 rounded-lg py-2 px-3 m-1">
													<Image
														src={locationicon}
														width={18}
														height={18}
														alt=""
													></Image>
												</div>
												<button
													value={city}
													onClick={() => handleLocationSelect(city)}
												>
													{city.city}, {city.regionCode}
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
				{showCalendar ? (
					<RangePicker
						onClickAway={() => setShowCalendar(false)}
						date={date}
						selected={selectedDates}
						onDateSelected={_handleOnDateSelected}
					/>
				) : null}
			</form>
		</div>
	);
}

export default Header;
