import { useState } from 'react';
import '../MyOrg/MyOrg.css';

const MyOrg = () => {
	console.log(useState());

	const handleClick = () => {
		console.log('Show/Hide element');
	};

	return (
		<section className='orgSection'>
			<h3 className='title'>My organizatin</h3>
			<img
				onClick={handleClick}
				src='/img/add-btn.svg'
				alt='add img'
			/>
		</section>
	);
};

export default MyOrg;
