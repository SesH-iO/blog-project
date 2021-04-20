import React from 'react';

import './recent-post.css';

import Card from '../../../components/UI/Card/card';

const RecentPost = (props) => {
	return (
		<div style={props.style}>
			<Card style={{ marginBottom: '20px' }}>
				<div className='postImageWrapper'>
					<img
						src={
							'https://1.bp.blogspot.com/-uUyRrF_pZzI/V9_OnN0WMPI/AAAAAAAAD48/GDN9pK1mnuwJvYdO4SoCJ38adB0sMzmLQCLcB/s1600/Special-1.jpg'
						}
						alt='PostImage'
					/>
				</div>
				<div style={{ textAlign: 'center' }}>
					<span>Featured</span>
					<h2>Memories From Last Summer</h2>
					<span>posted on January 07, 2016 by Sora Blogging Tips</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam in magni neque
						expedita adipisci error nesciunt voluptatibus asperiores odio. Pariatur incidunt ipsam
						id reprehenderit soluta corporis architecto consequatur delectus eum quo. Minima impedit
						fuga enim voluptatum a dolores, rerum exercitationem amet deserunt saepe, culpa aut est
						tenetur consequuntur deleniti.
					</p>
					<button>Read More &rarr;</button>
				</div>
			</Card>
			<Card style={{ marginBottom: '20px' }}>Post 2</Card>
			<Card style={{ marginBottom: '20px' }}>Post 3</Card>
		</div>
	);
};

export default RecentPost;
