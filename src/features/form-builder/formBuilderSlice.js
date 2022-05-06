import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	formFields: [],
};

const mockField = {
	id: 'id',
	order: 1,
	label: 'Label',
	placeHolder: 'Placeholder',
	type: 'text',
	options: ['if', 'select', 'or', 'checklist'],
};

initialState.formFields.push(mockField);

export const formBuilderSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		addField: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		deleteField: (state) => {},
		editField: (state) => {},
	},
});

// Action creators are generated for each case reducer function
export const { addField, deleteField, editField } = formBuilderSlice.actions;

export default formBuilderSlice.reducer;
