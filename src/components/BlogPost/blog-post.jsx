import React from 'react';
import './blog-post.css';

import Card from '../UI/Card/card';

const image = require('../../assets/blogPostImages/memories-from.jpg');

const BlogPost = (props) => {
	return (
		<div className='blogPostContainer'>
			<Card>
				<div className='blogHeader'>
					<span className='blogCategory'>Featured</span>
					<h1 className='postTitle'>Beautiful is always Beautiful</h1>
					<em style={{ fontSize: '14px', display: 'block', padding: '10px 0', color: '#565673' }}>
						posted on July 21, 2016 by Sora Blogging Tips
					</em>
				</div>
				<div className='postImageContainer'>
					<img src={image.default} alt='PostImage' />
				</div>
			</Card>
		</div>
	);
};

export default BlogPost;
