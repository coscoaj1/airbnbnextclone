import React from 'react';

export default function HomesList() {
	return (
		<div>
			{homes.map((home) => {
				return (
					<>
						<div key={home.id}>{home.description}</div>
						<img src={home.pictureUrl}></img>
					</>
				);
			})}
		</div>
	);
}
