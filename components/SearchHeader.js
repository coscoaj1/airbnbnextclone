import React from 'react';
import Image from 'next/image';
import redLogo from '../public/images/airbnb-red-icon.png';
import searchIcon from '../public/images/search-12-32.png';
import blackGlobe from '../public/images/icons8-globe-24.png';
import UserDropDown from './UserDropDown';

function SearchHeader({ formattedLocation, start, end, guestCount }) {
	return (
		<header className="flex fixed top-0 z-10 px-14 bg-white w-full">
			<button className="flex-3 flex flex-row items-center my-4">
				<div className="flex">
					<Image src={redLogo} width={32} height={32} alt="logo" />
				</div>
				<div className="hidden md:block font-medium text-2xl text-airbnb ml-1 pl-2">
					airbnb
				</div>
			</button>
			<div className="flex-3 w-96 pl-8">
				<button className="flex justify-between items-center w-96 my-3 py-2 px-2 rounded-full border border-gray-300 shadow-sm text-sm font-normal hover:shadow-md">
					<span className="font-medium pl-2">{formattedLocation}</span>
					<div className="border-r border-gray-300 h-2 pl-2 py-3"></div>
					<span className="inline-block font-medium px-3">
						{start}-{end}
					</span>
					<div className="border-r border-gray-300 h-2 pl-2 py-3"></div>
					<span className="inline-block px-3">
						{guestCount} {guestCount === 1 ? 'guest' : 'guests'}
					</span>
					<span className="bg-airbnb rounded-full w-7 h-7 ml-2">
						<div className="relative w-3 top-1 left-2">
							<Image src={searchIcon} width={10} height={10} />
						</div>
					</span>
				</button>
			</div>
			<div className="flex flex-3 items-center pl-14">
				<button className="py-2 px-3 text-sm  hover:bg-gray-100 rounded-2xl font-medium">
					Become a host
				</button>
				<button>
					<div className="ml-1 mr-4 px-3 pt-2 hover:bg-gray-100 rounded-full">
						<Image src={blackGlobe} alt="globe icon" width={20} height={20} />
					</div>
				</button>
				<UserDropDown />
			</div>
		</header>
	);
}

export default SearchHeader;
