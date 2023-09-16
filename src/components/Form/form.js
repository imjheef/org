import "./Form.css"

import TextField from "../TextField/TextField"
import OptionList from "../OptionList/OptionList"
import Button from '../Button/Button';
const Form = (props) => {
    
    const handleSubmit = (event) => {
			event.preventDefault();
			return console.log('handle Submit', event);
		};

		return (
			<section className='Form'>
				<form onSubmit={handleSubmit}>
					<h2>Fill in form to add collaborators</h2>
					<TextField
						titulo='Name'
						placeholder={'Type your name'}
					/>
					<TextField
						titulo='Position'
						placeholder={'Type your position'}
					/>
					<TextField
						titulo='Picture'
						placeholder='Upload your picture'
					/>
					<OptionList />
					<Button text='Create collaborator' />
				</form>
			</section>
		);
};


export default Form