import './CustomFormBuilder.css';
import { useState } from 'react';

const CustomFormBuilder = () => {
	const [fields, setFields] = useState([]);

	return (
		<section className='custom-form'>
			<form className='custom-form-builder'>
				<h1>Form Builder</h1>
				<div className='form-control'>
					<label htmlFor=''>add label</label>
					<input type='text' placeholder='label of your field' />
				</div>

				<div className='form-control'>
					<label htmlFor=''>add placeholder</label>
					<input type='text' placeholder='placeholder of your field' />
				</div>

				<div className='form-control'>
					<label htmlFor=''>select type</label>
					<select name='select'>
						<option value='text'>text</option>
						<option value='password'>password</option>
						<option value='email'>email</option>
						<option value='date'>date</option>
						<option value='tel'>telephone</option>
						<option value='select'>selectable list - multi</option>
						<option value='radio'>radio</option>
						<option value='checkbox'>checkbox list - multi</option>
						<option value='url'>url</option>
					</select>
				</div>
				<button className='btn btn-submit'>Add Field</button>
			</form>
		</section>
	);
};

export default CustomFormBuilder;
