import React from 'react';
import Image from 'next/image';
import tryHostingImg from '../public/images/tryHostingImage.webp';
import tryHostingDesktopImg from '../public/images/tryHostingDesktop.webp';

function TryHosting() {
	return (
		<div className="relative items-center my-4 mx-auto max-w-7xl">
			<div className="hidden sm:block w-full h-auto">
				<Image
					className="rounded-xl"
					src={tryHostingDesktopImg}
					width={1440}
					height={640}
					layout="responsive"
				/>
			</div>
			<div className="block sm:hidden">
				<Image className="rounded-lg" src={tryHostingImg} alt="" />
			</div>

			<div
				className="flex flex-col items-center sm:h-4/5 w-full sm:items-start 
                sm:justify-center px-8 text-white absolute top-8"
			>
				<h2 className="text-2xl lg:text-4xl font-medium">Try hosting</h2>
				<p className="font-light leading-tight px- sm:px-0 text-sm">
					Earn extra income and unlock new <br /> opportunities by sharing your
					space.
				</p>
				<button className="flex bg-white text-black text-xs lg:text-smbase font-light mt-4 px-3 py-1 rounded-md">
					Learn More
				</button>
			</div>
		</div>
	);
}

export default TryHosting;
