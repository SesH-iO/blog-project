import React from 'react';
import { ReactComponent as Search } from '../../assets/icons/search-icon.svg';

import './navbar.css';

const Navbar = (props) => (
	<div className='navbar'>
		<nav className='navbarMenu'>
			<a href='/'>HOME</a>
			<a href='/'>ABOUT</a>
			<a href='/'>POSTS</a>
			<a href='/'>CONTACT US</a>
		</nav>
		<div className='search'>
			<input type='text' placeholder='Search' />
			<div className='searchContaner'>
				<Search />
			</div>
		</div>
	</div>
);

export default Navbar;
