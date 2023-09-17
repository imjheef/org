import "./TextField.css"

const TextField = (props) => {
    console.log('Datos: ', props);
		return (
			<div className='TextField'>
				<label>{props.titulo}</label>
				<input
					placeholder={`${props.placeholder}...`}
					required={props.required}
				/>
			</div>
		);
}

export default TextField 