import { configureStore } from '@reduxjs/toolkit';
import formBuilderSlice from './features/form-builder/formBuilderSlice';

export const store = configureStore({
	reducer: {
		formBuilder: formBuilderSlice,
	},
});
