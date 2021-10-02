import React from 'react';
import Tabs from './Tabs';
import usCities from '../public/data/uscities';
import outdoorCities from '../public/data/outdoorcities';
import mountainCabins from '../public/data/mountaincabins';
import beachDestinations from '../public/data/beachtowns';
import popularDestinations from '../public/data/populardestinations';
import uniqueStays from '../public/data/uniquestays';

function TabsList() {
	return (
		<Tabs>
			<div label="Destinations for arts & culture">
				<div className="tabslist-div">
					{usCities.map((item) => (
						<ul className="tabslist-ul">
							<li className="">{item.city}</li>
							<li className="text-gray-500">{item.state}</li>
						</ul>
					))}
				</div>
			</div>
			<div label="Destinations for Outdoor adventure">
				<div className="tabslist-div">
					{outdoorCities.map((item) => (
						<ul className="tabslist-ul">
							<li>{item.city}</li>
							<li className="text-gray-500">{item.state}</li>
						</ul>
					))}
				</div>
			</div>
			<div label="Mountain cabins">
				<div className="tabslist-div">
					{mountainCabins.map((item) => (
						<ul className="tabslist-ul">
							<li>{item.city}</li>
							<li className="text-gray-500">{item.state}</li>
						</ul>
					))}
				</div>
			</div>
			<div label="Beach destinations">
				<div className="tabslist-div">
					{beachDestinations.map((item) => (
						<ul className="tabslist-ul">
							<li>{item.city}</li>
							<li className="text-gray-500">{item.state}</li>
						</ul>
					))}
				</div>
			</div>

			<div label="Popular destinations">
				<div className="tabslist-div">
					{popularDestinations.map((item) => (
						<ul className="tabslist-ul">
							<li>{item.city}</li>
							<li className="text-gray-500">{item.state}</li>
						</ul>
					))}
				</div>
			</div>
			<div label="Unique Stays">
				<div className="tabslist-div">
					{uniqueStays.map((item) => (
						<ul className="tabslist-ul">
							<li>{item.city}</li>
							<li className="text-gray-500">{item.state}</li>
						</ul>
					))}
				</div>
			</div>
		</Tabs>
	);
}

export default TabsList;
