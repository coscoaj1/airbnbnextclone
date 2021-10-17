import React from 'react';
import Image from 'next/image';

function HomeDetail({ item }) {
	return (
		<div>
			<div className="border-t border-gray-300 my-5"></div>
			<div className="flex">
				<Image
					className="rounded-xl"
					src={item.pictureUrl}
					height={200}
					width={300}
				/>
				<div className="flex flex-col ml-4">
					<div className="flex flex-col">
						<div className="text-gray-600 text-sm">{item.description}</div>
						<div className=" text-lg">{item.title}</div>
						<div className="border-b border-gray-300 w-10 py-1"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeDetail;
