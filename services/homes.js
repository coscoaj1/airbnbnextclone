import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/homes';

const getAll = () => {
	const request = axios.get(baseUrl);
	return request.then((response) => response.data);
};

const exportedObject = {
	getAll,
	baseUrl,
};

export default exportedObject;
