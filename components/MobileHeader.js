import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import searchIcon from '../public/images/magnifying-glass.png';
import { Transition } from '@headlessui/react';
import { Popover } from '@headlessui/react';
import ChevronLeft from './icons/ChevronLeft';
import MobileFlexibleButton from './Buttons/MobileFlexibleButton';

export default function MobileHeader() {
	const [mobileNav, setMobileNav] = useState(false);
	const [isShowing, setIsShowing] = useState(true);

	useEffect(() => {
		window.addEventListener('scroll', changeHeader);
		return () => window.removeEventListener('scroll', changeHeader);
	});
	const handleClick = () => {
		console.log('clicked');
	};

	const changeHeader = () => {
		if (window.scrollY >= 80) {
			setMobileNav(true);
		} else {
			setMobileNav(false);
		}
	};

	return (
		<div className={mobileNav ? 'mobileNav-active' : 'mobileNav'}>
			<Popover as="div" className="fixed top-0 z-50 w-screen h-full sm:hidden">
				<Popover.Button
					onClick={handleClick}
					className={mobileNav ? 'mobileNavButton-active' : 'mobileNavButton'}
					aria-label="mobile dropdown menu"
				>
					<Image width={18} height={18} src={searchIcon} alt="" /> Where are you
					going?
				</Popover.Button>
				<Transition
					className="absolute left-0 z-50 w-screen"
					enter="transition ease-in-out duration-300 transform"
					enterFrom="translate-y-full"
					enterTo="translate-y-10"
					leave="transition ease-in-out duration-300 transform"
					leaveFrom="translate-y-0"
					leaveTo="-translate-y-full"
				>
					<Popover.Panel className="z-50 flex flex-col h-screen gap-2 font-bold text-black bg-white border border-purple-500 items center">
						<div className="flex flex-row items-center p-2">
							<ChevronLeft />
							<div className="cursor">
								<input
									className="p-1 text-base outline-none"
									type="text"
									placeholder="Enter Location"
									autoFocus
								/>
								<i></i>
							</div>
						</div>
						<div className="flex flex-col p-8">
							<h4 className="text-xs font-bold uppercase">
								Go anywhere, anytime.
							</h4>
						</div>
						<MobileFlexibleButton />
					</Popover.Panel>
				</Transition>
			</Popover>
		</div>
	);
}
