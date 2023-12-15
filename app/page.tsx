import React from 'react';
import './globals.css'
import Hero from './components/Hero';
import Header from './components/header';
import CTA from './components/CTA';
export default function Home() {


	return (
		<>
			<Header/>
			<CTA/>
			<Hero/>
		</>
	);
}
