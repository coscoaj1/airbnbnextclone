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
			<ul>
				<img className="mx-auto w-4" src={searchIcon} alt="magnifying glass" />
				<li className="px-7">
					<a href="#explore">Explore</a>
				</li>
			</ul>
			<ul>
				<img className="mx-auto w-4" src={heartIcon} alt="heart icon" />
				<li className="px-7">
					<a href="#Wishlists">Wishlists</a>
				</li>
			</ul>
			<ul>
				<img className="mx-auto w-4" src={user} alt="user logo" />
				<li className="px-7">
					<a href="#Log in">Log in</a>
				</li>
			</ul>
		</nav>
	);
}
