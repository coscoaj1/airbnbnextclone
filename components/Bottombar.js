import React from 'react';
import Image from 'next/image';
import user from '../public/images/user.png';
import searchIcon from '../public/images/magnifying-glass.png';
import heartIcon from '../public/images/heart.png';

export default function Bottombar() {
	return (
		<nav
			className="z-10 fixed bottom-0 w-full bg-white flex items-center justify-center
                    p-2 text-xxs mt-2 sm:hidden "
		>
			<ul className="mx-auto w-5">
				<Image className="" src={searchIcon} alt="magnifying glass" />
				<li className="-ml-1">
					<a href="#explore">Explore</a>
				</li>
			</ul>
			<ul className="mx-auto w-5">
				<Image src={heartIcon} alt="heart icon" />
				<li className="-ml-2">
					<a href="#Wishlists">Wishlists</a>
				</li>
			</ul>
			<ul className="mx-auto w-5">
				<Image src={user} alt="user logo" />
				<li className="-ml-.5">
					<a href="#Log in">Login</a>
				</li>
			</ul>
		</nav>
	);
}
