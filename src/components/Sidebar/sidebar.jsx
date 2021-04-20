import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './sidebar.css';

import blogPosts from '../../data/blog.json';
import Card from '../UI/Card/card';

const Sidebar = (props) => {
	const [blPosts, setBlPosts] = useState([]);

	useEffect(() => {
		const posts = blogPosts.data;
		setBlPosts(posts);
	}, [blPosts]);

	return (
		<div className='sidebarContainer' style={{ width: props.width }}>
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
			<Card style={{ marginBottom: '15px', padding: '20px' }}>
				<div className='cardHeader'>
					<span>Social networks</span>
				</div>
			</Card>
			<Card style={{ marginBottom: '15px', padding: '20px' }}>
				<div className='cardHeader'>
					<span>Recent Post</span>
				</div>
				<div className='recentPosts'>
					{blPosts.map((post) => {
						return (
							<NavLink to={`/post/${post.slug}`} key={post.slug}>
								<div className='recentPost'>
									<h3>{post.blogTitle}</h3>
									<span>{post.postedOn}</span>
								</div>
							</NavLink>
						);
					})}
				</div>
			</Card>
		</div>
	);
};

export default Sidebar;
