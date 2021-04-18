import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Search } from '../../assets/icons/search-icon.svg';

import './navbar.css';

const Navbar = (props) => {
	const [search, setSearch] = useState(false);

	const submitSearchHandler = (e) => {
		e.preventDefault();
		alert('Done!!');
	};

	const openSearchHandler = () => {
		setSearch(true);
	};

	const searchClass = search ? 'searchInput active' : 'searchInput';

	return (
		<div className='navbar'>
			<nav className='navbarMenu'>
				<NavLink to='/'>HOME</NavLink>
				<NavLink to='/about'>ABOUT</NavLink>
				<NavLink to='/posts'>POSTS</NavLink>
				<NavLink to='/contact-us'>CONTACT US</NavLink>
			</nav>
			<div className='search'>
				<form onSubmit={submitSearchHandler}>
					<input className={searchClass} type='text' placeholder='Search' />
					<div className='searchIconConatiner'>
						<Search onClick={openSearchHandler} />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Navbar;
