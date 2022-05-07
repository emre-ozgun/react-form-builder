import { useState } from 'react';
import './CustomForm.css';
import { selectFormFields } from '../../features/form-builder/formBuilderSlice';
import { useSelector } from 'react-redux';

const CustomForm = () => {
	// TODO: Make fields controlled
	// const [fields, setFields] = useState();

	const { formFields } = useSelector(selectFormFields);

	console.log(formFields);

	return (
		<section>
			<form className='custom-form'>
				<h1>Form Title</h1>
				{formFields.map((formField) => {
					return (
						<div className='form-control' key={formField.id}>
							<label className='form-control__label'>{formField.label}</label>
							<input
								className='form-control__input'
								autoComplete={formField.type}
								type={formField.type}
								placeholder={formField.placeHolder}
							/>
						</div>
					);
				})}
				<button className='btn btn-submit'>Submit</button>
			</form>
		</section>
	);
};

export default CustomForm;
