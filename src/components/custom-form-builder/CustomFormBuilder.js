import './CustomFormBuilder.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addField } from '../../features/form-builder/formBuilderSlice';

const initialFields = {
	label: '',
	placeholder: '',
	type: 'text',
	options: [],
};

const CustomFormBuilder = () => {
	const dispatch = useDispatch();
	const [fields, setFields] = useState(initialFields);

	const handleAddFormField = (e) => {
		e.preventDefault();
		dispatch(addField(fields));
		setFields(initialFields);
	};

	const handleChangeType = (e) => {
		setFields((prev) => ({ ...prev, type: e.target.value }));
	};

	return (
		<section className='custom-form'>
			<form className='custom-form-builder'>
				<h1>Form Builder</h1>
				<div className='form-control'>
					<label htmlFor='label'>add label</label>
					<input
						id='label'
						required
						value={fields.label}
						onChange={(e) =>
							setFields((prev) => ({ ...prev, label: e.target.value }))
						}
						type='text'
						placeholder='label...'
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='placeholder'>add placeholder</label>
					<input
						id='placeholder'
						required
						value={fields.placeholder}
						onChange={(e) =>
							setFields((prev) => ({ ...prev, placeholder: e.target.value }))
						}
						type='text'
						placeholder='placeholder...'
					/>
				</div>

				{/* HARDCODED OPTIONS */}
				<div className='form-control'>
					<label htmlFor=''>select type</label>
					<select
						className='form-control__select'
						onChange={handleChangeType}
						value={fields.type}
					>
						<option className='form-control__option' value='text'>
							Text
						</option>
						<option value='password'>Password</option>
						<option value='email'>Email</option>
						<option value='date'>Date</option>
						<option value='tel'>Telephone</option>
						<option value='select'>Selectable List - Multiple Choice</option>
						<option value='checkbox'>Checkbox list - Multiple Choice</option>
						<option value='radio'>Radio - Single Choice</option>
						<option value='url'>Url</option>
						<option value='textarea'>Text Area</option>
					</select>
				</div>
				<button className='btn btn-submit' onClick={handleAddFormField}>
					Add Field
				</button>
			</form>
		</section>
	);
};

export default CustomFormBuilder;
