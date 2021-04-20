import React from 'react';


import BlogPost from '../../components/BlogPost/blog-post';
import Layout from '../../components/Layout/layout';

import './post.css';

const Post = (props) => {
	return (
		<Layout>
			<BlogPost {...props} />
		</Layout>
	);
};

export default Post;
