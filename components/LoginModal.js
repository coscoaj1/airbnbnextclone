import React from "react";
import { getCrsfToken } from "next-auth/react";
import { signIn } from "next-auth/react";
import { Dialog } from "@headlessui/react";
import CancelIcon from "../public/images/x-svgrepo-com (1).svg";
import TwitterIcon from "../public/images/icons8-twitter-30.png";
import Image from "next/image";

function LoginModal({ open, onClose, crsfToken }) {
  return (
    <div className={open ? "z-10 fixed inset-0 bg-black opacity-40" : ""}>
      <Dialog
        className="fixed inset-0 z-30 max-w-lg mx-auto my-auto text-black bg-white h-lg rounded-xl "
        open={open}
        onClose={onClose}
      >
        <Dialog.Overlay />
        <Dialog.Title className="flex items-center justify-between w-full ">
          <button
            onClick={onClose}
            className="w-6 h-6 ml-4 text-left border-none rounded-full hover:bg-gray-200"
          >
            <CancelIcon className="pl-1" width="20" height="20" alt="" />
          </button>
          <div className="py-4 mr-48 font-bold">Log in or sign up</div>
        </Dialog.Title>
        <div className="mt-1 border-b border-gray-200"></div>
        <Dialog.Description className="py-4 ml-4 overflow-y-auto text-2xl font-medium">
          Welcome to Airbnb
        </Dialog.Description>
        <div className="flex flex-col w-full h-lg ">
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn("email", {
                callbackUrl: "https://airbnbnextclone.vercel.app",
              });
            }}
            className="py-3 pl-1 mx-4 my-5 text-base font-medium text-white duration-200 transform bg-red-500 rounded-md w-lg active:scale-95"
          >
            Continue with Email
          </button>

          <div className="mx-4 mt-3 text-center border-b border-gray-30 leading-2 w-lg ">
            <span className="px-2 bg-white">or</span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn("twitter", {
                callbackUrl: "https://airbnbnextclone.vercel.app",
              });
            }}
            className="flex items-start pl-1 mx-4 mt-8 text-base font-medium duration-200 transform border border-black rounded-md gap-28 w-lg active:scale-95"
          >
            <div className="flex items-center justify-center h-full mr-2">
              <Image src={TwitterIcon} width={32} height={32} alt="" />
            </div>
            <div className="py-3 text-center">Continue with Twitter</div>
          </button>
        </div>
      </Dialog>
    </div>
  );
}

export default LoginModal;

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
