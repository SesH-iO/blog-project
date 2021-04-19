import React from 'react';
import BlogPost from '../../components/BlogPost/blog-post';
import Sidebar from '../../components/Sidebar/sidebar';

import './post.css';

const Post = (props) => {
	return (
		<section className='container'>
			<BlogPost {...props} />
			<Sidebar />
		</section>
	);
};

export default Post;
