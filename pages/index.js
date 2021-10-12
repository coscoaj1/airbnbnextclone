import React, { useState, useEffect } from 'react';
import homeService from '../services/homes';
import Discover from '../components/Discover';
import Bottombar from '../components/Bottombar';
import LiveAnywhere from '../components/LiveAnywhere';
import NearbyCardList from '../components/NearbyCardList';
import Hero from '../components/Hero';
import Header from '../components/Header';
import TryHosting from '../components/TryHosting';
import TabsList from '../components/TabsList';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useAuth } from '../firebase/auth';
import LoginContainer from '../components/Login';

export default function Home() {
	const { user } = useAuth();
	const [homes, setHomes] = useState([]);

	return (
		<div className="font-circular box-border">
			<Header />
			<Hero />
			<Bottombar />
			<div className="px-14">
				<NearbyCardList />
				<LiveAnywhere />
				<TryHosting />
				<Discover />
				<TabsList />
			</div>
			<Footer />
		</div>
	);
}
// useEffect(() => {
// 	homeService.getAll().then((homes) => setHomes(homes));
// }, []);

// console.log(homes);
