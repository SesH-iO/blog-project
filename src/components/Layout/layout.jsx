import React, { Fragment } from 'react';
import './layout.css';

import Sidebar from '../Sidebar/sidebar';
import Footer from '../Footer/footer';

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
	return (
		<Fragment>
			<div className='container'>
				{props.children}
				<Sidebar />
			</div>
			<div>
				<Footer />
			</div>
		</Fragment>
	);
};

export default Layout;
