import React from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const baseUrl = "http://localhost:3001/api/homes";

export default function HomeForm() {
  const validationSchema = Yup.object().shape({
    image: Yup.mixed().required("Image required"),
    description: Yup.string()
      .min(8, "Must be at least 8 characters")
      .matches(/^[a-zA-Z0-9]+$/, "Cannot contain special characters or spaces")
      .required("Description required"),
    title: Yup.string()
      .required("Title required.")
      .min(6, "Must be at least 6 characters")
      .matches(/^[a-zA-Z0-9]+$/, "Cannot contain special characters or spaces"),
    price: Yup.number().required("Price required"),
  });

  return (
    <div>
      <Formik
        initialValues={{ image: "", description: "", title: "", price: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const formData = new FormData();
          formData.append("image", values.image);
          formData.append("description", values.description);
          formData.append("title", values.title);
          formData.append("price", values.price);
          console.log(values);

          const result = await axios.post(`${baseUrl}/homeImage`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          return result.data;
        }}
      >
        {({ props, errors, touched }) => (
          <Form className="h-screen w-screen flex flex-col items-center justify-center">
            <input
              onChange={(event) =>
                props.setFieldValue("image", event.target.files[0])
              }
              type="file"
              accept="image/*"
            ></input>
            <label htmlFor="title">description</label>
            <Field
              className="border border-gray-700 py-1 px-2"
              type="text"
              id="description"
              name="description"
            />
            {errors.description && touched.description ? (
              <div className="text-red-500">{errors.description}</div>
            ) : null}
            <label htmlFor="title">title</label>
            <Field
              className="border border-gray-700 py-1 px-2"
              type="text"
              id="title"
              name="title"
            />
            {errors.title && touched.title ? (
              <div className="text-red-500">{errors.title}</div>
            ) : null}
            <label htmlFor="price">price</label>
            <Field
              className="border border-gray-700 py-1 px-2"
              type="text"
              id="price"
              name="price"
            />
            {errors.price && touched.price ? (
              <div className="text-red-500">{errors.price}</div>
            ) : null}
            <button
              className="transform active:scale-90 duration-150 px-4 py-2 border border-black rounded-lg"
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
