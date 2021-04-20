import React from 'react';

import blogData from '../../data/blog.json';
import './home.css';

import Card from '../../components/UI/Card/card';
import RecentPost from './RecentPost/recent-post';
import Layout from '../../components/Layout/layout';

const SideImage = (props) => {
	return (
		<div style={{ height: `${props.height}px`, margin: '0 0 5px 5px' }}>
			<img style={{ height: '450px', maxWidth: '100%' }} src={props.src} alt={props.alt} />
		</div>
	);
};

const ImageGallery = (props) => (
	<div className='galleryPost' style={props.galleryStyle}>
		<section style={{ width: props.largeWidth }}>
			<div>
				<img
					style={{ width: '100%' }}
					src={require(`../../assets/blogPostImages/${props.imagesArray[0]}`).default}
					alt='PostImage'
				/>
			</div>
		</section>
		<section className='sideWImageWrapper' style={{ width: props.smallWidth }}>
			{props.imagesArray.splice(1).map((img) => (
				<SideImage
					height={props.sideImageHeight}
					src={require(`../../assets/blogPostImages/${img}`).default}
					align='center'
					alt='PostImage'
				/>
			))}
		</section>
	</div>
);

const Home = (props) => {
	const galleryHeight = 450;
	const galleryStyle = {
		height: galleryHeight + 'px',
		overflow: 'hidden',
	};
	const sideImageHeight = galleryHeight / 3;
	const imgArr = blogData.data.map((post) => post.blogImage);

	return (
		<div>
			<Card>
				<ImageGallery
					largeWidth='70%'
					smallWidth='30%'
					galleryStyle={galleryStyle}
					sideImageHeight={sideImageHeight}
					imagesArray={imgArr}
				/>
			</Card>
			<Layout>
				<RecentPost style={{ width: '70%', display: 'block' }} />
			</Layout>
		</div>
	);
};

export default Home;
