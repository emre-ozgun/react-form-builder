import { useState } from 'react';
import './CustomForm.css';

const CustomForm = () => {
	const [type, setType] = useState('color');

	return (
		<section>
			<form>
				<h1>Form Output</h1>
			</form>
		</section>
	);
};

export default CustomForm;
