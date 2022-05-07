import { createSlice } from '@reduxjs/toolkit';

// both the builder and the form itself shall use formFields
const initialState = {
	formFields: [
		{
			id: 1,
			order: 1,
			label: 'Email Address',
			placeHolder: 'Your Email',
			type: 'email',
			options: [],
			required: false,
		},
		{
			id: 2,
			order: 2,
			label: 'Password',
			placeHolder: 'Your Password',
			type: 'password',
			options: [],
			required: true,
		},
	],
};

// options are available for types that suport multiple fields (checklist/select/radio)
// order for drag and drop - must be float and must also be initialized with large number!

export const formBuilderSlice = createSlice({
	name: 'formBuilder',
	initialState,
	reducers: {
		addField: (state) => {},
		deleteField: (state, action) => {},
		editField: (state, action) => {},
	},
});

export const { addField, deleteField, editField } = formBuilderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFormFields = (state) => state.formBuilder;

export default formBuilderSlice.reducer;
