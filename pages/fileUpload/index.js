import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Camera from "../../public/images/camera-symbol-svgrepo-com.svg";
import airbnbLogo from "../../public/images/airbnb-48.ico";
import Image from "next/image";
import Link from "next/link";
import router, { useRouter } from "next/router";
import Loader from "react-loader-spinner";

const baseUrl = "https://airbnbclone-backend.herokuapp.com/api/homes";
export default function HomeForm() {
  const [imageValue, setImageValue] = useState("");
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    image: Yup.mixed().required("Image required"),
    description: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Description required"),
    title: Yup.string()
      .required("Title required")
      .min(6, "Must be at least 6 characters"),
    price: Yup.number()
      .typeError("Must specify a price")
      .required("Price required"),
  });

  return (
    <div className="flex flex-row h-auto mb-16 relative">
      {loading && (
        <Loader
          className="absolute grid h-full w-full place-items-center"
          type="Grid"
          color="#000"
          height={80}
          width={80}
        />
      )}
      <div className="flex-7 bg-gradient-to-b from-gradient1 via-gradient3 to-gradient2">
        <Link to="/" href="/" passHref>
          <button className="px-3 py-3">
            <Image src={airbnbLogo} width={36} height={36} alt="" />
          </button>
        </Link>
        <div className="h-full flex items-center justify-center text-5xl text-white font-medium">
          <span className="px-10 ">Tell us about the place you will host.</span>
        </div>
      </div>
      <div className="flex-7 w-full">
        <Formik
          initialValues={{
            image: "",
            description: "",
            title: "",
            price: "",
            guests: 0,
            bedrooms: 0,
            beds: 0,
            baths: 0,
            kitchens: 0,
            wifi: false,
            air_conditioning: false,
            parking: false,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            setLoading(true);

            setTimeout(() => {
              alert("listing confirmed!");
              setLoading(false);
              resetForm();
              setImageValue("");
              router.push("/");
            }, 2000);
            const formData = new FormData();
            formData.append("image", values.image);
            formData.append("description", values.description);
            formData.append("title", values.title);
            formData.append("price", values.price);
            formData.append("guests", values.guests);
            formData.append("bedrooms", values.bedrooms);
            formData.append("beds", values.beds);
            formData.append("baths", values.baths);
            formData.append("kitchens", values.kitchens);
            formData.append("wifi", values.wifi);
            formData.append("air_conditioning", values.air_conditioning);
            formData.append("parking", values.parking);
            console.log(formData);
            const result = await axios.post(`${baseUrl}/homeImage`, formData, {
              headers: { "Content-Type": "multipart/form-data" },
            });
            return result.data;
          }}
        >
          {(props) => (
            <Form
              autoComplete="off"
              className="flex flex-col gap-2 items-center justify-center text-lg overscroll-none overflow-x-hidden"
            >
              <div className="text-2xl font-medium">
                Enter main listing photo
              </div>
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
                  props.setFieldValue("image", event.target.files[0]);
                  setImageValue(event.target.files[0].name);
                }}
                accept="image/*"
              ></input>
              <label htmlFor="description" className="text-2xl font-medium">
                Enter a description of your place
              </label>
              <Field
                className="border border-black py-1 px-2 rounded-lg"
                type="text"
                id="description"
                name="description"
              />
              {props.errors.description && props.touched.description ? (
                <div className="text-red-500">{props.errors.description}</div>
              ) : null}
              <label htmlFor="title" className="text-2xl font-medium">
                Enter a listing title
              </label>
              <Field
                className="border border-black py-1 px-2 rounded-lg"
                type="text"
                id="title"
                name="title"
              />
              {props.errors.title && props.touched.title ? (
                <div className="text-red-500">{props.errors.title}</div>
              ) : null}
              <label htmlFor="price" className="text-2xl font-medium">
                Price per night
              </label>
              <Field
                className="border border-black py-1 px-2 rounded-lg"
                type="text"
                id="price"
                name="price"
              />
              {props.errors.price && props.touched.price ? (
                <div className="text-red-500">{props.errors.price}</div>
              ) : null}
              <div id="guests" className="text-2xl font-medium">
                Guests
              </div>
              <div role="group" aria-labelledby="guests">
                <label className="px-1">
                  <Field
                    type="radio"
                    name="guests"
                    value="1"
                    className="mr-2"
                  />
                  One
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="guests"
                    value="2"
                    className="mr-2"
                  />
                  Two
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="guests"
                    value="3"
                    className="mr-2"
                  />
                  Three
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="guests"
                    value="4"
                    className="mr-2"
                  />
                  Four
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="guests"
                    value="5"
                    className="mr-2"
                  />
                  Five
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="guests"
                    value="6"
                    className="mr-2"
                  />
                  Six
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="guests"
                    value="7"
                    className="mr-2"
                  />
                  Seven
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="guests"
                    value="8"
                    className="mr-2"
                  />
                  Eight
                </label>
              </div>
              <div id="bedrooms" className="text-2xl font-medium">
                Bedrooms
              </div>
              <div role="group" aria-labelledby="bedrooms">
                <label className="px-1">
                  <Field
                    type="radio"
                    name="bedrooms"
                    value="1"
                    className="mr-2"
                  />
                  One
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="bedrooms"
                    value="2"
                    className="mr-2"
                  />
                  Two
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="bedrooms"
                    value="3"
                    className="mr-2"
                  />
                  Three
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="bedrooms"
                    value="4"
                    className="mr-2"
                  />
                  Four
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="bedrooms"
                    value="5"
                    className="mr-2"
                  />
                  Five
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="bedrooms"
                    value="6"
                    className="mr-2"
                  />
                  Six
                </label>
              </div>
              <div id="beds" className="text-2xl font-medium">
                Beds
              </div>
              <div role="group" aria-labelledby="beds">
                <label className="px-1">
                  <Field type="radio" name="beds" value="1" className="mr-2" />
                  One
                </label>
                <label className="px-1">
                  <Field type="radio" name="beds" value="2" className="mr-2" />
                  Two
                </label>
                <label className="px-1">
                  <Field type="radio" name="beds" value="3" className="mr-2" />
                  Three
                </label>
                <label className="px-1">
                  <Field type="radio" name="beds" value="4" className="mr-2" />
                  Four
                </label>
                <label className="px-1">
                  <Field type="radio" name="beds" value="5" className="mr-2" />
                  Five
                </label>
                <label className="px-1">
                  <Field type="radio" name="beds" value="6" className="mr-2" />
                  Six
                </label>
                <label className="px-1">
                  <Field type="radio" name="beds" value="7" className="mr-2" />
                  Seven
                </label>
                <label className="px-1">
                  <Field type="radio" name="beds" value="8" className="mr-2" />
                  Eight
                </label>
              </div>
              <div id="baths" className="text-2xl font-medium">
                Baths
              </div>
              <div role="group" aria-labelledby="baths">
                <label className="px-1">
                  <Field type="radio" name="baths" value="1" className="mr-2" />
                  One
                </label>
                <label className="px-1">
                  <Field type="radio" name="baths" value="2" className="mr-2" />
                  Two
                </label>
                <label className="px-1">
                  <Field type="radio" name="baths" value="3" className="mr-2" />
                  Three
                </label>
                <label className="px-1">
                  <Field type="radio" name="baths" value="4" className="mr-2" />
                  Four
                </label>
              </div>
              <div id="kitchens" className="text-2xl font-medium">
                Kitchens
              </div>
              <div role="group" aria-labelledby="kitchens">
                <label className="px-1">
                  <Field
                    type="radio"
                    name="kitchens"
                    value="1"
                    className="mr-2"
                  />
                  One
                </label>
                <label className="px-1">
                  <Field
                    type="radio"
                    name="kitchens"
                    value="2"
                    className="mr-2"
                  />
                  Two
                </label>
              </div>
              <div className="text-2xl font-medium">Amenities</div>
              <div className="flex gap-6">
                <div
                  role="checkbox"
                  aria-checked="false"
                  aria-labelledby="wifi"
                >
                  <label>
                    <Field type="checkbox" name="wifi" />
                    Wifi
                  </label>
                </div>
                <div
                  role="checkbox"
                  aria-checked="false"
                  aria-labelledby="air_conditioning"
                >
                  <label>
                    <Field type="checkbox" name="air_conditioning" />
                    Air Conditioning
                  </label>
                </div>
                <div
                  role="checkbox"
                  aria-checked="false"
                  aria-labelledby="parking"
                >
                  <label>
                    <Field type="checkbox" name="parking" />
                    Free Parking
                  </label>
                </div>
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
