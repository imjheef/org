import './OptionList.css';

const OptionList = () => {
	const teams = [
		'Programming',
		'Front End',
		'Data Science',
		'DevOps',
		'UX & Design',
		'Mobile',
		'Innovation & Management',
	];

	return (
		<div className='OptionList'>
			<label>Teams</label>
			<select>
				{teams.map((teams, index) => {
					return <option key={index}>{teams}</option>;
				})}
			</select>
		</div>
	);
};

export default OptionList;
