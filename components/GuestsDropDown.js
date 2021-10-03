import React from 'react';
import searchIcon from '../public/images/search-12-32.png';
import GuestsCounter from './GuestsCounter';
import Image from 'next/image';
import { Popover } from '@headlessui/react';

function GuestsDropDown() {
	return (
		<Popover>
			<Popover.Button className="flex">
				<ul>
					<li className="pt-3 pr-2">Guests</li>
					<li className="font-light text-left">Add+</li>
				</ul>
				<button className="mx-4 pt-2 ">
					<div className="bg-red-500 relative rounded-full w-10 h-10 ml-3">
						<div className="absolute top-3.5 left-3.5">
							<Image
								width={16}
								height={16}
								src={searchIcon}
								alt="search icon"
							/>
						</div>
					</div>
				</button>
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
							<GuestsCounter />
						</div>
						<div className="flex justify-between px-6">
							<div>
								<ul>
									<li>Adults</li>
									<li className="font-light text-smlr text-gray-500">
										Ages 2-12
									</li>
								</ul>
							</div>
							<GuestsCounter />
						</div>
					<div className="flex justify-between px-6 py-4">
						<div>
							<ul>
								<li>Infants</li>
								<li className="font-light text-smlr text-gray-500">Under 2</li>
							</ul>
						</div>
						<GuestsCounter />
					</div>
			</Popover.Panel>
		</Popover>
	);
}

export default GuestsDropDown;
