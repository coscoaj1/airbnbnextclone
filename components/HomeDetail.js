import React from 'react';
import Image from 'next/image';
import star from '../public/images/icons8-star-50.png';

function HomeDetail({ item, dayCount }) {
	return (
		<div>
			<div className="border-t border-gray-300 my-5"></div>
			<div className="flex">
				<button className="h-48 w-82 mt-3 flex-7 ">
					<Image
						alt=""
						className="rounded-xl"
						src={item.pictureUrl}
						height={200}
						width={300}
					/>
				</button>
				<div className="flex flex-col ml-4 w-96">
					<div className="flex flex-col">
						<div className="text-gray-500 text-smbase">{item.description}</div>
						<div className=" text-lg">{item.title}</div>
						<div className="border-b border-gray-300 w-10 py-1"></div>
					</div>

					<div className="flex flex-col my-1 text-smbase ">
						<div className="text-gray-500">
							{item.guests} guests · {item.bedrooms} bedrooms · {item.beds} beds
							· {item.baths} baths
						</div>
						<div className="text-gray-500">
							{item.parking && <span>Free parking </span>}
							{item.wifi && <span>· Wifi </span>}
							{item.air_conditioning && <span>· Air Conditioning</span>}
						</div>
						<div className="mt-16 flex justify-between w-82">
							<div className="flex flex-row items-end">
								<div>
									<Image alt="star icon" src={star} width={14} height={14} />
								</div>
								<div>
									<span className="pl-1 font-medium">{item.rating}</span>
									{item.reviews > 0 && (
										<span className="text-smbase text-gray-500">
											({item.reviews} reviews)
										</span>
									)}
								</div>
							</div>
							<div className="flex flex-col items-end">
								<div className="text-lg">
									<span className="font-bold">${item.price}</span> / night
								</div>
								<div className="underline text-smbase text-gray-500">
									${dayCount * item.price} total
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeDetail;
