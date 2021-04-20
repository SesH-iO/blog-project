import React, { useState, useEffect } from 'react';
import './blog-post.css';
import blogPosts from '../../data/blog.json';

import Card from '../UI/Card/card';

const BlogPost = (props) => {
	const [blPost, setBlPost] = useState({
		id: '',
		blogCategory: '',
		blogTitle: '',
		slug: '',
		postedOn: '',
		author: '',
		blogImage: '',
		blogText: '',
	});
	const [slug, setSlug] = useState('');

	useEffect(() => {
		const slug = props.match.params.slug;
		const post = blogPosts.data.find((blogPost) => blogPost.slug === slug);
		setBlPost(post);
		setSlug(slug);
	}, [blPost, props.match.params.slug]);

	if (blPost.blogImage === '') return null;
	return (
		<div className='blogPostContainer'>
			<Card>
				<div className='blogHeader'>
					<span className='blogCategory'>{blPost.blogCategory}</span>
					<h1 className='postTitle'>{blPost.blogTitle}</h1>
					<em style={{ fontSize: '14px', display: 'block', padding: '10px 0', color: '#565673' }}>
						{blPost.postedOn} by {blPost.author}
					</em>
				</div>
				<div className='postImageContainer'>
					<img
						src={require(`../../assets/blogPostImages/${blPost.blogImage}`).default}
						alt='PostImage'
					/>
				</div>
				<div className='postContent'>
					<h3>{blPost.blogTitle}</h3>
					<p>{blPost.blogText}</p>
				</div>
			</Card>
		</div>
	);
};

export default BlogPost;
