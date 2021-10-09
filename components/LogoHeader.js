import React from 'react';
import Image from 'next/image';
import logo from '../public/images/airbnb-48.ico';
import redLogo from '../public/images/airbnb-red-icon.png';
import searchIcon from '../public/images/search-12-32.png';
import globe from '../public/images/icons8-globe-50.png';
import blackGlobe from '../public/images/icons8-globe-24.png';
import userIcon from '../public/images/profile-user.png';
import menuIcon from '../public/images/icons8-menu-24.png';

function LogoHeader({ navbar }) {
	return (
		<div className="relative flex flex-row mx-24">
			<div className="flex-5 flex flex-row items-center">
				<div className={navbar ? 'mt-2' : 'flex '}>
					<Image
						src={navbar ? redLogo : logo}
						width={32}
						height={32}
						alt="logo"
					/>
				</div>
				<div className="hidden md:block font-medium text-2xl pl-1">airbnb</div>
			</div>
			<div className="flex-6 w-84">
				<button
					className={
						navbar
							? 'flex justify-between items-center my-3 py-2 px-2 rounded-full border border-gray-300 shadow-md text-sm font-normal'
							: 'hidden'
					}
				>
					<span className=" pl-2">Start your search</span>
					<span className="bg-red-500 relative rounded-full w-7 h-7 ml-20">
						<div className="relative w-3 top-1.5 left-2">
							<Image src={searchIcon} />
						</div>
					</span>
				</button>
			</div>
			<div className="flex items-center justify-end flex-5">
				<button className="mx-2 pt-1 text-sm  hover:bg-gray-50 hover:bg-opacity-20 px-2 rounded-lg">
					Become a host
				</button>
				<button>
					<div className="ml-2 mr-5 px-2 pt-2 hover:bg-gray-50 hover:bg-opacity-20 rounded-full">
						<Image
							src={navbar ? blackGlobe : globe}
							alt="globe icon"
							width={20}
							height={20}
						/>
					</div>
				</button>
				<div className="flex flex-row mr-6 bg-white rounded-full border items-center">
					<button className="w-4 h-auto mt-3 mb-1 ml-2 z-10">
						<Image src={menuIcon} width={16} height={16} alt="" />
					</button>
					<button className="w-7 mx-2 mt-1">
						<Image src={userIcon} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default LogoHeader;
