import React, { useState, useEffect } from 'react';
import searchIcon from '../public/images/magnifying-glass.png';

export default function MobileHeader() {
	const [mobileNav, setMobileNav] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', changeHeader);
		window.removeEventListener('scroll', changeHeader);
	});

	const changeHeader = () => {
		if (window.scrollY >= 80) {
			setMobileNav(true);
		} else {
			setMobileNav(false);
		}
	};

	return (
		<div className={mobileNav ? 'mobileNav-active' : 'mobileNav'}>
			<button
				className={mobileNav ? 'mobileNavButton-active' : 'mobileNavButton'}
			>
				<img className="w-4" src={searchIcon} alt="" /> Where are you going?
			</button>
		</div>
	);
}
