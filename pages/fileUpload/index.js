import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Camera from '../../public/images/camera-symbol-svgrepo-com.svg';
import airbnbLogo from '../../public/images/airbnb-48.ico';
import Image from 'next/image';

const baseUrl = 'http://localhost:3001/api/homes';

export default function HomeForm() {
	const [imageValue, setImageValue] = useState('');

	const validationSchema = Yup.object().shape({
		image: Yup.mixed().required('Image required'),
		description: Yup.string()
			.min(8, 'Must be at least 8 characters')
			.required('Description required'),
		title: Yup.string()
			.required('Title required')
			.min(6, 'Must be at least 6 characters'),
		price: Yup.number()
			.typeError('Must specify a price')
			.required('Price required'),
	});

	return (
		<div className="flex flex-row h-auto w-screen">
			<div className="flex-7 h-auto bg-gradient-to-b from-gradient1 via-gradient3 to-gradient2">
				<div className="px-3 py-3">
					<Image src={airbnbLogo} width={36} height={36} />
				</div>
				<div className="h-full flex items-center justify-center text-5xl text-white font-medium">
					<span className="px-10 ">What kind of place will you host?</span>
				</div>
			</div>
			<div className="flex-7 w-full">
				<Formik
					initialValues={{
						image: '',
						description: '',
						title: '',
						price: '',
						bedrooms: 0,
						beds: 0,
						baths: 0,
						kitchens: 0,
						wifi: false,
						air_conditioning: false,
						parking: false,
					}}
					validationSchema={validationSchema}
					onSubmit={async (values) => {
						const formData = new FormData();
						formData.append('image', values.image);
						formData.append('description', values.description);
						formData.append('title', values.title);
						formData.append('price', values.price);
						formData.append('bedrooms', values.bedrooms);
						formData.append('beds', values.beds);
						formData.append('baths', values.baths);
						formData.append('kitchens', values.kitchens);
						formData.append('wifi', values.wifi);
						formData.append('air_conditioning', values.air_conditioning);
						formData.append('parking', values.parking);
						console.log(formData);
						const result = await axios.post(`${baseUrl}/homeImage`, formData, {
							headers: { 'Content-Type': 'multipart/form-data' },
						});
						return result.data;
					}}
				>
					{(props) => (
						<Form className="h-screen flex flex-col gap-3 items-center justify-center font-medium text-lg">
							<div>Enter main listing photo</div>
							<label
								className="flex flex-row gap-5 px-5 py-1 border border-black cursor-pointer italic"
								htmlFor="image"
							>
								<span>
									<Camera width={30} height={30} />
								</span>
								Choose an image
							</label>
							{imageValue ?? <div>{imageValue}</div>}
							<input
								className="hidden"
								type="file"
								id="image"
								name="image"
								onChange={(event) => {
									props.setFieldValue('image', event.target.files[0]);
									setImageValue(event.target.files[0].name);
								}}
								accept="image/*"
							></input>
							<label htmlFor="description">Enter a description</label>
							<Field
								className="border border-black py-1 px-2 rounded-lg"
								type="text"
								id="description"
								name="description"
							/>
							{props.errors.description && props.touched.description ? (
								<div className="text-red-500">{props.errors.description}</div>
							) : null}
							<label htmlFor="title">Enter a listing title</label>
							<Field
								className="border border-black py-1 px-2 rounded-lg"
								type="text"
								id="title"
								name="title"
							/>
							{props.errors.title && props.touched.title ? (
								<div className="text-red-500">{props.errors.title}</div>
							) : null}
							<label htmlFor="price">Price per night</label>
							<Field
								className="border border-black py-1 px-2 rounded-lg"
								type="text"
								id="price"
								name="price"
							/>
							{props.errors.price && props.touched.price ? (
								<div className="text-red-500">{props.errors.price}</div>
							) : null}
							<div id="bedrooms">Bedrooms:</div>
							<div role="group" aria-labelledby="bedrooms">
								<label className="px-1">
									<Field type="radio" name="bedrooms" value="1" />
									One
								</label>
								<label className="px-1">
									<Field type="radio" name="bedrooms" value="2" />
									Two
								</label>
								<label className="px-1">
									<Field type="radio" name="bedrooms" value="3" />
									Three
								</label>
								<label className="px-1">
									<Field type="radio" name="bedrooms" value="4" />
									Four
								</label>
								<label className="px-1">
									<Field type="radio" name="bedrooms" value="5" />
									Five
								</label>
								<label className="px-1">
									<Field type="radio" name="bedrooms" value="6" />
									Six
								</label>
								<label className="px-1">
									<Field type="radio" name="bedrooms" value="7" />
									Seven
								</label>
								<label className="px-1">
									<Field type="radio" name="bedrooms" value="8" />
									Eight
								</label>
							</div>
							<div id="beds">Beds:</div>
							<div role="group" aria-labelledby="beds">
								<label className="px-1">
									<Field type="radio" name="beds" value="1" />
									One
								</label>
								<label className="px-1">
									<Field type="radio" name="beds" value="2" />
									Two
								</label>
								<label className="px-1">
									<Field type="radio" name="beds" value="3" />
									Three
								</label>
								<label className="px-1">
									<Field type="radio" name="beds" value="4" />
									Four
								</label>
							</div>
							<div id="baths">Baths:</div>
							<div role="group" aria-labelledby="baths">
								<label className="px-1">
									<Field type="radio" name="baths" value="1" />
									One
								</label>
								<label className="px-1">
									<Field type="radio" name="baths" value="2" />
									Two
								</label>
								<label className="px-1">
									<Field type="radio" name="baths" value="3" />
									Three
								</label>
								<label className="px-1">
									<Field type="radio" name="baths" value="4" />
									Four
								</label>
							</div>
							<div id="kitchens">Kitchens:</div>
							<div role="group" aria-labelledby="kitchens">
								<label className="px-1">
									<Field type="radio" name="kitchens" value="1" />
									One
								</label>
								<label className="px-1">
									<Field type="radio" name="kitchens" value="2" />
									Two
								</label>
							</div>
							<div>Amenities:</div>
							<div role="checkbox" aria-labelledby="wifi">
								<label>
									<Field type="checkbox" name="wifi" />
									Wifi
								</label>
							</div>
							<div role="checkbox" aria-labelledby="air_conditioning">
								<label>
									<Field type="checkbox" name="air_conditioning" />
									Air Conditioning
								</label>
							</div>
							<div role="checkbox" aria-labelledby="parking">
								<label>
									<Field type="checkbox" name="parking" />
									Free Parking
								</label>
							</div>
							<button
								className="bg-black text-white transform active:scale-90 duration-150 px-5 py-2 border border-black rounded-lg"
								type="submit"
							>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

// async function postHome({ image, description }) {
// 	const formData = new FormData();
// 	formData.append('image', image);
// 	formData.append('description', description);

// 	const result = await axios.post(`${baseUrl}/homeImage`, formData, {
// 		headers: { 'Content-Type': 'multipart/form-data' },
// 	});
// 	return result.data;
// }
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
