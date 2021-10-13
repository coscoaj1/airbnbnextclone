import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

function LoginModal() {
	let [isOpen, setIsOpen] = useState(true);

	return (
		<div className="flex items-center border border-red-500 justify-center w-screen h-auto">
			<Dialog
				className="bg-white mx-auto text-black z-30 inset-0 w-96 h-96"
				open={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<Dialog.Overlay className="z-20 opacity-50 w-screen" />
				<Dialog.Title>Deactivate account</Dialog.Title>
				<Dialog.Description>
					This will permanently deactivate your account
				</Dialog.Description>
				<p>
					Are you sure you want to deactivate your account? All of your data
					will be permanently removed. This action cannot be undone.
				</p>
				<button onClick={() => setIsOpen(false)}>Deactivate</button>
				<button onClick={() => setIsOpen(false)}>Cancel</button>
			</Dialog>
		</div>
	);
}

export default LoginModal;
