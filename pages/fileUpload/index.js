import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

const baseUrl = 'http://localhost:3001/api/homes';

// async function postHome({ image, description }) {
// 	const formData = new FormData();
// 	formData.append('image', image);
// 	formData.append('description', description);

// 	const result = await axios.post(`${baseUrl}/homeImage`, formData, {
// 		headers: { 'Content-Type': 'multipart/form-data' },
// 	});
// 	return result.data;
// }

export default function HomeForm() {
	// const [description, setDescription] = useState('');
	// const [file, setFile] = useState();

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	const result = await postHome({ image: file, description });
	// };

	// const fileSelected = (event) => {
	// 	const file = event.target.files[0];
	// 	setFile(file);
	// };

	return (
		<div>
			<Formik
				initialValues={{ image: '', description: '' }}
				onSubmit={async (values) => {
					const formData = new FormData();
					formData.append('image', values.image);
					formData.append('description', values.description);

					const result = await axios.post(`${baseUrl}/homeImage`, formData, {
						headers: { 'Content-Type': 'multipart/form-data' },
					});
					return result.data;
				}}
			>
				{(props) => (
					<Form>
						<input
							onChange={(event) =>
								props.setFieldValue('image', event.target.files[0])
							}
							type="file"
							accept="image/*"
						></input>
						<Field type="text" id="description" name="description"></Field>
						<button
							onClick={() => {
								window.alert('file uploaded');
							}}
							className="px-4 py-2 border border-black rounded-lg"
							type="submit"
						>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
