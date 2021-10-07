import React from 'react';
import Image from 'next/image'
import globeIcon from '../public/images/icons8-globe-24.png';
import facebookIcon from '../public/images/icons8-facebook-f-30.png';
import twitterIcon from '../public/images/icons8-twitter-30.png';
import instagramLogo from '../public/images/icons8-instagram-24.png';
import {
	aboutList,
	communityList,
	hostList,
	supportList,
} from '../public/data/footer';

function Footer() {
	return (
		<div className="hidden sm:block bg-gray-100 w-full px-16">
			<div className="flex flex-col md:flex-row text-sm mx-auto max-w-7xl py-8 border-b border-gray-300">
				<div className="footer-div">
					<p className="py-4 uppercase text-xs">About</p>
					<ul className="footer-ul">
						{aboutList.map((item) => (
							<li key={item} className="footer-li">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="footer-div">
					<p className="py-4 uppercase text-xs">Community</p>
					<ul className="footer-ul">
						{communityList.map((item) => (
							<li key={item} className="footer-li ">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="footer-div">
					<p className="py-4 uppercase text-xs">Host</p>
					<ul className="footer-ul">
						{hostList.map((item) => (
							<li key={item} className="footer-li">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="flex-2 md:border-none">
					<p className="py-4 uppercase text-xs">Support</p>
					<ul className="footer-ul">
						{supportList.map((item) => (
							<li key={item} className="footer-li">
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="my-2">
				<div className="flex flex-col md:flex-row justify-between items-center mx-12 text-sm font-light py-2">
					<div>
						<div>
							&copy; 2021 Airbnb, Inc. <span>&#183;</span>{' '}
							<button className="font-light px-1">Privacy</button>
							<span>&#183;</span>{' '}
							<button className="font-light px-1">Terms</button>
							<span>&#183;</span>{' '}
							<button className="font-light px-1">Sitemap</button>
						</div>
					</div>
					<div className="flex flex-row gap-3 underline font-light">
						<button>
							<Image alt="" width={22} height={20} src={globeIcon} />
						</button>
						<button>
							<span className="font-medium">English(US)</span>
						</button>
						<button>
							<span className="px-1 font-medium">$</span>
							<span className="font-medium mr-8">USD</span>
						</button>
						<button>
							<Image alt="" width={28} height={28} src={facebookIcon} />
						</button>
						<button>
							<span>
								<Image alt=""width={20} height={20} src={twitterIcon} />
							</span>
						</button>
						<button>
							<Image alt="" src={instagramLogo} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
