import React, {useState} from 'react';


function HeaderTabs({ navbar }) {
	const [activeTab, setActiveTab] = useState()
	return (
		<div className={navbar ? 'navsearch-active' : 'navsearch'}>
			<button className="mx-8 relative ">
				<span>Places to stay</span>
				<div className="border-b-2 border-white mt-1 w-4 left-10 absolute"></div>
			</button>
			<button className="relative group mx-8 hover:text-gray-300">
				<span>Experiences</span>
				<div className="transition delay-50 duration-200 ease-in border-b-2 group-hover:border-white border-green-900 mt-1 w-1 left-10 absolute"></div>
				</button>
			<button className="relative group mx-8 hover:text-gray-300">
				<span>Online Experiences</span>
				<div className="transition delay-50 duration-200 ease-in border-b-2 group-hover:border-white border-green-900 mt-1 w-1 left-16 absolute"></div>
				</button>
		</div>
	);
}

export default HeaderTabs;
