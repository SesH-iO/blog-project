import React from 'react';
import './header.css';

/**
 * @author
 * @function Header
 **/

const Header = (props) => (
	<header className='header'>
		<nav className='headerMenu'>
			<a href='/'>Home</a>
			<a href='/'>About</a>
			<a href='/'>Contact Us</a>
		</nav>
		<div>Social Media Icons</div>
	</header>
);

export default Header;
