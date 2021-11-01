
# This is an Airbnb clone
>Live demo [_here_](https://airbnbnextclone.vercel.app/)

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)


## General info

I began undertaking this project after learning how to implement image uploads to S3 with Multer/Node.js 
I figured it would be a great base for an Airbnb clone, and a great way to learn 
some new technologies like Google Maps API, etc.

## Technologies

Project is created with:

* React/Next.js
* Node.js
* Express.js
* Multer
* MongoDB
* Tailwind
* Amazon S3
* Google Maps API
* Authentication with NextAuth
* Frontend deployed on Vercel
* Backend deployed on Heroku

## Features

* Custom location and date range picker built with the dayzed library. 
* Authentication built with NextAuth including email and Twitter sign in.
* Search listing page includes Google Maps implementation for the correct location entered.
* Create listing page takes an image upload, stores it in an S3 bucket, then references the link to the image in the database table.

## Room for improvement:
To do: 
- Implement update and delete functionality, and a dynamic comment/rating system.
- Mobile functionality.

## Acknowledgements:

- This project was inpired by [_this tutorial_](https://www.youtube.com/watch?v=NZElg91l_ms&t=1121s) on uploading images to a backend.

