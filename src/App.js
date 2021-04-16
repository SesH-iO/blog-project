import React from 'react';

import './App.css';

import Home from './containers/Home/home';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Home />
		</div>
	);
}

export default App;
