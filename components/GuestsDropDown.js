import React, { useState } from 'react';
import searchIcon from '../public/images/search-12-32.png';
import GuestsCounter from './GuestsCounter';
import Image from 'next/image';
import { Popover } from '@headlessui/react';

function GuestsDropDown() {
	const [totalGuests, setTotalGuests] = useState(null);
	return (
		<div className="grid grid-cols-2">
			<Popover>
				<Popover.Button className="grid grid-cols-2 w-24">
					<div className="col-span-1">
						<div className="pt-2 h-full col-span-1">Guests</div>
						{(() => {
							switch (totalGuests) {
								case null:
									return <div className="h-full">Add</div>;
								case 1:
									return <div className="font-light">{totalGuests} Guest</div>;
								default:
									return (
										<div className="font-light text-left">
											{totalGuests} Guests
										</div>
									);
							}
						})()}
					</div>
					{totalGuests ? (
						<div className="col-start-2 col-span-1">
							<button
								className="place-items-center w-4 border border-gray-800 rounded-full transform translate-y-3"
								onClick={() => setTotalGuests(null)}
							>
								x
							</button>
						</div>
					) : null}
				</Popover.Button>
				<Popover.Panel className="flex flex-col w-82 bg-white rounded-3xl text-sm transform translate-y-4 -translate-x-52 ">
					<div
						className="flex justify-between  px-6 py-4 
                                    "
					>
						<div>
							<ul>
								<li>Adults</li>
								<li className="font-light text-smlr text-gray-500">
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
								<li className="font-light text-smlr text-gray-500">
									Ages 2-12
								</li>
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
								<li className="font-light text-smlr text-gray-500">Under 2</li>
							</ul>
						</div>
						<GuestsCounter
							totalGuests={totalGuests}
							setTotalGuests={setTotalGuests}
						/>
					</div>
				</Popover.Panel>
			</Popover>
			<div className=" col-start-3 place-items-end pt-1 ">
				<div className="bg-red-500 relative rounded-full w-10 h-10">
					<div className="absolute top-3.5 left-3.5">
						<Image width={16} height={16} src={searchIcon} alt="search icon" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default GuestsDropDown;
