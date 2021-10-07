import React, { useState } from 'react';
import searchIcon from '../public/images/Untitledsearch (1).png';
import GuestsCounter from './GuestsCounter';
import Image from 'next/image';
import { Popover } from '@headlessui/react';
import CancelX from '../public/images/12555439561530177266.svg';

function GuestsDropDown() {
	const [totalGuests, setTotalGuests] = useState(null);
	return (
		<div className="grid grid-cols-3 h-24 ">
			<Popover>
				<Popover.Button className="grid grid-cols-2 w-24 ">
					<div className="col-span-1 text-left px-4 bg-opacity-40 ">
						<div className="pt-2.5 h-full col-span-1 text-xs tracking-wider ">
							Guests
						</div>
						{(() => {
							switch (totalGuests) {
								case null:
									return <div className="h-full text-sm font-light">Add</div>;
								case 1:
									return (
										<div className="text left font-light w-24">
											{totalGuests} Guest
										</div>
									);
								default:
									return (
										<div className="text-left font-light w-24">
											{totalGuests} Guests
										</div>
									);
							}
						})()}
					</div>
					{totalGuests ? (
						<div className="grid grid-cols-1 col-start-2 col-span-1 place-items-end">
							<button className="pt-4" onClick={() => setTotalGuests(null)}>
								<CancelX width={19} />
							</button>
						</div>
					) : null}
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
			<div className=" col-start-3  mr-1">
				<div className="relative  w-12 h-12 pt-1">
					<Image width={108} height={108} src={searchIcon} alt="search icon" />
				</div>
			</div>
		</div>
	);
}

export default GuestsDropDown;
