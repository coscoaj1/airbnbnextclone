import React, { useRef } from 'react';
import Image from 'next/image';
import LiveAnywhereCard from './LiveAnywhereCard';
import OutdoorImg from '../public/images/OutdoorGetaways.jpg';
import UniqueImg from '../public/images/UniqueStays.jpg';
import EntireImg from '../public/images/EntireHomes.jpg';
import PetsImg from '../public/images/PetsAllowed.jpg';
import leftArrow from '../public/images/left-chevron.png';
import rightArrow from '../public/images/right-chevron.png';

const liveAnywhereList = [
	{
		img: OutdoorImg,
		title: 'Outdoor getaways',
	},
	{
		img: UniqueImg,
		title: 'Unique stays',
	},
	{
		img: EntireImg,
		title: 'Entire homes',
	},
	{
		img: PetsImg,
		title: 'Pets allowed',
	},
];

function LiveAnywhere() {
	const ref = useRef(null);
	const scroll = (scrollOffset) => {
		ref.current.scrollLeft += scrollOffset;
	};
	const scrollRight = () => {
		scroll(400);
		//showScrollLeft;
		//hideScrollRight;
	};
	const scrollLeft = () => {
		scroll(-400);
		//showScrollRight;
		//hideScrollLeft;
	};
	return (
		<div className="relative my-4 mx-12 h-auto ">
			<div className="hidden sm:block md:hidden  absolute top-36 right-0 z-10">
				<span className="top-1/2">
					<button
						onClick={() => scrollRight()}
						className="flex justify-center items-center bg-gray-100 rounded-full w-6 h-6 shadow-3xl border border-gray-200"
					>
						<Image width={10} height={10} src={rightArrow} alt="" />
					</button>
				</span>
			</div>
			<div className="hidden sm:block md:hidden absolute top-36 left-0 z-10">
				<span className="top-1/2">
					<button
						onClick={() => scrollLeft()}
						className="flex justify-center items-center bg-gray-100 rounded-full w-6 h-6 shadow-3xl border border-gray-200"
					>
						<Image width={10} height={10} src={leftArrow} alt="" />
					</button>
				</span>
			</div>
			<h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
				Live anywhere
			</h2>
			<div
				ref={ref}
				id="liveAnywhereList"
				className="relative h-auto md:overflow-x-hidden overflow-x-scroll overflow-y-hidden mt-4 
				 grid grid-col-4 grid-rows-1 gap-4 mx-2 "
			>
				<LiveAnywhereCard card={liveAnywhereList[0]} />
				<LiveAnywhereCard card={liveAnywhereList[1]} />
				<LiveAnywhereCard card={liveAnywhereList[2]} />
				<LiveAnywhereCard card={liveAnywhereList[3]} />
			</div>
		</div>
	);
}

export default LiveAnywhere;
