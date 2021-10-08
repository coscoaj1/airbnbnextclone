import React from 'react';

function HeaderTabs({ navbar }) {
	return (
		<div className={navbar ? 'navsearch-active' : 'navsearch'}>
			<button className="mx-8 ">
				<span>Places to stay</span>
			</button>
			<button className="mx-8 ">Experiences</button>
			<button className="mx-8 ">Online Experiences</button>
		</div>
	);
}

export default HeaderTabs;
