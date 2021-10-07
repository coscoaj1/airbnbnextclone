import React from 'react';
import Image from 'next/image';
import tryHostingImg from '../public/images/tryHostingImage.webp';
import tryHostingDesktopImg from '../public/images/tryHostingDesktop.webp';

function TryHosting() {
	return (
		<div className="relative items-center my-5 mx-12">
			<div className="hidden sm:block w-full h-auto">
				<Image
					className="rounded-xl"
					src={tryHostingDesktopImg}
					width={1440}
					height={620}
					layout="responsive"
				/>
			</div>
			<div className="block sm:hidden">
				<Image className="rounded-lg" src={tryHostingImg} alt="" />
			</div>

			<div
				className="flex flex-col items-center sm:h-4/5 w-full sm:items-start 
                sm:justify-center px-20 text-white absolute top-8"
			>
				<h2 className="text-3xl md:text-5xl md:leading-relaxed font-medium">
					Try hosting
				</h2>
				<p className="font-light sm:px-0 text-base md:text-lg">
					Earn extra income and unlock new <br /> opportunities by sharing your
					space.
				</p>
				<button className="flex bg-white text-black text-sm font-normal mt-4 px-4 py-1.5 rounded-md">
					Learn More
				</button>
			</div>
		</div>
	);
}

export default TryHosting;
