import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import Image from 'next/image';
import userIcon from '../public/images/profile-user.png';
import menuIcon from '../public/images/icons8-menu-24.png';
import LoginModal from './LoginModal';

export default function UserDropDown({ navbar }) {
	const [showModal, setShowModal] = useState(false);

	const onClick = () => {
		setShowModal(true);
	};

	return (
		<>
			<div className="-mr-6">
				<Menu>
					<Menu.Button>
						<div
							className={
								navbar
									? 'flex flex-row items-center mr-6 bg-white rounded-full border hover:shadow-md'
									: 'flex flex-row items-center mr-6 bg-white rounded-full border'
							}
						>
							<div className="w-5 h-auto mt-2 mb-1 ml-2 z-10">
								<Image src={menuIcon} width={16} height={18} alt="" />
							</div>
							<div className="w-7 mx-2 mt-1.5">
								<Image src={userIcon} alt="" />
							</div>
						</div>
					</Menu.Button>
					<Menu.Items className="z-10 absolute right-0 w-64 h-auto mt-2 origin-top-right bg-white text-black divide-y divide-gray-100 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="flex flex-col px-1 py-1 border-b border-gray-200 text-sm">
							<Menu.Item>
								{({ active }) => (
									<li
										as=""
										className={`${
											active ? ' bg-gray-100' : 'bg-white'
										} w-full font-medium px-3 py-2.5 mx-0 rounded-lg`}
									>
										<button onClick={onClick}>Sign up</button>
									</li>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										as=""
										className={`${
											active ? 'bg-gray-100' : 'bg-white'
										} w-full px-3 py-2.5 mx-0 rounded-lg`}
										href="#"
									>
										Log in
									</a>
								)}
							</Menu.Item>
						</div>
						<div className="flex flex-col px-1 py-1 text-sm">
							<Menu.Item>
								{({ active }) => (
									<a
										as=""
										className={`${
											active ? 'bg-gray-100' : 'bg-white'
										} w-full px-3 py-2.5 mx-0 rounded-lg`}
										href="#"
									>
										Host your home
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										as=""
										className={`${
											active ? 'bg-gray-100' : 'bg-white'
										} w-full px-3 py-2.5 mx-0 rounded-lg`}
										href="#"
									>
										Host an experience
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										as=""
										className={`${
											active ? 'bg-gray-100' : 'bg-white'
										} w-full px-3 py-2.5 mx-0 rounded-lg`}
										href="#"
									>
										Help
									</a>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Menu>
			</div>
			{showModal && <LoginModal />}
		</>
	);
}
