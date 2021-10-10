import React, { useState } from 'react';
import searchIcon from '../public/images/Untitledsearch (1).png';
import GuestsCounter from './GuestsCounter';
import Image from 'next/image';
import { Popover } from '@headlessui/react';
import CancelX from '../public/images/x-svgrepo-com (1).svg';

function GuestsDropDown({ sendTotal }) {
	const [totalGuests, setTotalGuests] = useState(null);
	return (
		<div className="grid grid-cols-3 h-24 ">
			<Popover>
				<Popover.Button className="grid grid-cols-2 w-24 ">
					<div className="col-span-1 text-left px-4 bg-opacity-40 ">
						<div className="pt-2 h-full col-span-1 text-xs font-medium tracking-wider">
							Guests
						</div>
						{(() => {
							switch (totalGuests) {
								case null:
									return <div className="h-full text-sm font-light">Add</div>;
								case 1:
									return (
										<div className="text left font-medium text-sm w-24">
											{totalGuests} Guest
										</div>
									);
								default:
									return (
										<div className="text-left font-medium text-sm w-24">
											{totalGuests} Guests
										</div>
									);
							}
						})()}
					</div>
				</Popover.Button>
				<Popover.Panel className="flex flex-col w-96 bg-white rounded-3xl  text-base transform translate-y-4 -translate-x-52 ">
					<div className="flex justify-between px-6 py-4">
						<div>
							<ul>
								<li>Adults</li>
								<li className="font-light text-sm text-gray-500">
									Ages 13 or above
								</li>
							</ul>
						</div>
						<GuestsCounter
							totalGuests={totalGuests}
							setTotalGuests={setTotalGuests}
						/>
					</div>
					<div className="flex justify-between px-6">
						<div>
							<ul>
								<li>Children</li>
								<li className="font-light text-sm text-gray-500">Ages 2-12</li>
							</ul>
						</div>
						<GuestsCounter
							totalGuests={totalGuests}
							setTotalGuests={setTotalGuests}
						/>
					</div>
					<div className="flex justify-between px-6 py-4">
						<div>
							<ul>
								<li>Infants</li>
								<li className="font-light text-sm text-gray-500">Under 2</li>
							</ul>
						</div>
						<GuestsCounter
							totalGuests={totalGuests}
							setTotalGuests={setTotalGuests}
						/>
					</div>
				</Popover.Panel>
			</Popover>
			{totalGuests ? (
				<div className="ml-5">
					<button
						className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full transform translate-y-4"
						onClick={() => setTotalGuests(null)}
					>
						<CancelX width={18} height={18} className="rounded-full pl-1.5" />
					</button>
				</div>
			) : null}
			<div className=" col-start-3  mr-1">
				<button
					type="submit"
					onClick={() => {
						sendTotal(totalGuests);
					}}
					className="relative w-12 h-12 pt-1 active:scale-90 transform duration-200"
				>
					<Image width={108} height={108} src={searchIcon} alt="search icon" />
				</button>
			</div>
		</div>
	);
}

export default GuestsDropDown;
