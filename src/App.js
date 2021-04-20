import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './containers/Home/home';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import ContactUs from './containers/ContactUs/contact-us';
import Post from './containers/Post/post';

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Switch>
				<Route path='/post/:slug' component={Post} />
				<Route path='/contact-us' component={ContactUs} />
				<Route exact path='/' component={Home} />
			</Switch>
		</div>
	);
}

export default App;
