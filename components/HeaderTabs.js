import React from 'react';

function HeaderTabs({ navbar }) {
	return (
		<div className={navbar ? 'navsearch-active' : 'navsearch'}>
			<button className="mx-8 font-light">
				<span>Places to stay</span>
			</button>
			<button className="mx-8 font-light">Experiences</button>
			<button className="mx-8 font-light">Online Experiences</button>
		</div>
	);
}

export default HeaderTabs;
