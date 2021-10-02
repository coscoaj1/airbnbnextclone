import React, { useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/homes';

async function postHome({ image, description }) {
	const formData = new FormData();
	formData.append('image', image);
	formData.append('description', description);

	const result = await axios.post(`${baseUrl}/images`, formData, {
		headers: { 'Content-Type': 'multipart/form-data' },
	});
	return result.data;
}

export default function HomeForm() {
	const [description, setDescription] = useState('');
	const [file, setFile] = useState();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const result = await postHome({ image: file, description });
	};

	const fileSelected = (event) => {
		const file = event.target.files[0];
		setFile(file);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={fileSelected} type="file" accept="image/*"></input>
				<input
					value={description}
					type="text"
					onChange={(e) => setDescription(e.target.value)}
				></input>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
