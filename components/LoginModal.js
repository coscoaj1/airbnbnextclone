import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Dialog } from "@headlessui/react";
import CancelIcon from "../public/images/x-svgrepo-com (1).svg";
import GithubIcon from "../public/images/iconmonstr-github-1.svg";

function LoginModal({ open, onClose }) {
  return (
    <div className={open ? "z-10 fixed inset-0 bg-black opacity-40" : ""}>
      <Dialog
        className="bg-white mx-auto my-auto text-black z-30 fixed inset-0 max-w-lg h-xl rounded-xl "
        open={open}
        onClose={onClose}
      >
        <Dialog.Overlay />
        <Dialog.Title className="flex w-full items-center justify-between ">
          <button
            onClick={onClose}
            className="text-left ml-4 rounded-full hover:bg-gray-200 w-6 h-6 border-none"
          >
            <CancelIcon className="pl-1" width="20" height="20" alt="" />
          </button>
          <div className="font-bold mr-48 py-4">Log in or sign up</div>
        </Dialog.Title>
        <div className="border-b border-gray-200 mt-1"></div>
        <Dialog.Description className="text-2xl font-medium py-4 ml-4 overflow-y-auto">
          Welcome to Airbnb
        </Dialog.Description>
        <div className="flex flex-col h-lg w-full ">
          <label htmlFor="email" className="pl-4">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className="w-lg mx-4 my-1 py-2 pl-1 border border-black rounded-md"
          />
          <label htmlFor="password" className="pl-4">
            Password:
          </label>
          <input
            id="password"
            type="password"
            className="w-lg mx-4 my-1 py-2 pl-1 border border-black rounded-md bg-white"
          />
          <button className="w-lg mx-4 my-5 py-3 pl-1 bg-red-500 text-white text-base font-medium rounded-md active:scale-95 transform duration-200">
            Continue
          </button>
          <div
            className="border-b border-gray-30 mx-4 mt-3 leading-2
                     w-lg text-center "
          >
            <span className="px-2 bg-white">or</span>
          </div>
          <Link href="/api/auth/signin" passHref>
            <button
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
              className="flex items-start gap-28 w-lg mx-4 my-5 pl-1 text-base font-medium border border-black rounded-md active:scale-95 transform duration-200"
            >
              <div className="flex justify-center items-center h-full mr-2">
                <GithubIcon width={24} height={24} alt="" />
              </div>
              <div className="py-3 text-center">Continue with Github</div>
            </button>
          </Link>
        </div>
      </Dialog>
    </div>
  );
}

export default LoginModal;
