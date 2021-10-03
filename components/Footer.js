import React from 'react';
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
		<div className=" hidden sm:block">
			<div className="flex flex-col md:flex-row text-tiny mx-auto max-w-7xl py-8 border-b border-gray-300">
				<div className="footer-div">
					<p className="py-4">ABOUT</p>
					<ul className="footer-ul">
						{aboutList.map((item) => (
							<li key={item} className="footer-li">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="footer-div">
					<p className="py-4">COMMUNITY</p>
					<ul className="footer-ul">
						{communityList.map((item) => (
							<li key={item} className="footer-li ">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="footer-div">
					<p className="py-4">HOST</p>
					<ul className="footer-ul">
						{hostList.map((item) => (
							<li key={item} className="footer-li">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="flex-2  md:border-none">
					<p className="py-4">SUPPORT</p>
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
				<div className="flex flex-col md:flex-row justify-between items-center mx-12 text-xs font-light py-2">
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
							<img alt="" className="w-4" src={globeIcon} />
						</button>
						<button>
							<span className="font-light">English(US)</span>
						</button>
						<button>
							<span className="px-1 font-light">$</span>
							<span className="font-light">USD</span>
						</button>
					</div>
					<div>
						<button>
							<img alt="" className="w-4 ml-4" src={facebookIcon} />
						</button>
						<button>
							<img alt="" className="w-4 mx-2" src={twitterIcon} />
						</button>
						<button>
							<img alt="" className="w-5" src={instagramLogo} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
