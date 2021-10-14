import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import CancelIcon from '../public/images/x-svgrepo-com (1).svg';

function LoginModal({ open, onClose }) {
	return (
		<div>
			<Dialog
				className="bg-white mx-auto my-auto text-black z-30 fixed inset-0 max-w-lg h-lg rounded-lg"
				open={open}
				onClose={onClose}
			>
				<Dialog.Overlay />
				<Dialog.Title className="flex w-full items-center justify-between ">
					<button
						onClick={onClose}
						className="text-left ml-4 rounded-full hover:bg-gray-200 w-6 h-6 border-none"
					>
						<CancelIcon className="pl-1" width="20" height="20" />
					</button>
					<div className="font-bold mr-48 py-4">Log in or sign up</div>
				</Dialog.Title>
				<div className="border-b border-gray-200"></div>
				<Dialog.Description className="text-3xl font-medium py-4 ml-4">
					Welcome to Airbnb
				</Dialog.Description>
				<div className="flex flex-col">
					<label for="email" className="pl-4">
						Email:
					</label>
					<input
						id="email"
						type="email"
						className="w-lg mx-4 py-1 pl-1 border border-black rounded-md"
					/>
					<label for="password" className="pl-4">
						Password:
					</label>
					<input
						id="password"
						type="password"
						className="w-lg ml-4 mr-4 py-1 pl-1 border border-black rounded-md"
					/>
					<button onClick={() => setIsOpen(false)}>Deactivate</button>
					<button onClick={() => setIsOpen(false)}>Cancel</button>
				</div>
			</Dialog>
		</div>
	);
}

export default LoginModal;
