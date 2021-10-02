import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Input(props) {
	const { label, name, ...rest } = props;
	return (
		<div className="mx-auto my-10 border-2">
			<label htmlFor={name}>{label}</label>
			<Field id={name} name={name} {...rest} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default Input;
