import React from 'react';
import './sidebar.css';

import Card from '../UI/Card/card';

const Sidebar = (props) => {
	return (
		<div className='sidebarContainer'>
			<Card style={{ marginBottom: '15px', padding: '20px' }}>
				<div className='cardHeader'>
					<span>About Us</span>
				</div>
				<div className='profileContainer'>
					<img
						src='https://lh6.googleusercontent.com/proxy/BNTP6Key0o9otwwNgdiSiSrliCarykDas5G-X4V735fetEw2aYj_xSTrK42_139di3icKwIzvZVXxURH9ulRTJBdtBW6-4nvSmzdNcv4jtVwNI3Lj3C_BnKhvcPZEGI-iZt_Z3ZnXh0JcH_DhrfgOzSFzQ=s0-d'
						alt='Pic'
					/>
				</div>
				<div className='cardBody'>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta recusandae reiciendis
						impedit delectus, voluptate aperiam, commodi reprehenderit iure.
					</p>
				</div>
			</Card>
			<Card>
				<div className='cardHeader'>
					<span>Social network</span>
				</div>
			</Card>
		</div>
	);
};

export default Sidebar;
