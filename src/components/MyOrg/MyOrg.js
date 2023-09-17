import { useState } from 'react';
import '../MyOrg/MyOrg.css';

const MyOrg = () => {
	console.log();

	// const [name, updateName] = useState("Jheferson")
	const [name, updateName] = useState(true)

	const handleClick = () => {
		console.log('Show/Hide element');
		updateName(!name)
	};

	return (
		<section className='orgSection'>
			<h3 className='title'>My organization {name} </h3>
			<img
				onClick={handleClick}
				src='/img/add-btn.svg'
				alt='add img'
			/>
		</section>
	);
};

export default MyOrg;
