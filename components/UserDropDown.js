import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import userIcon from "../public/images/profile-user.png";
import menuIcon from "../public/images/icons8-menu-24.png";
import LoginModal from "./LoginModal";
import loggedInIcon from "../public/images/user_pic-50x50.png";

export default function UserDropDown({ navbar }) {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const onClick = () => {
    setShowModal(true);
    setIsOpen(true);
  };

  const handleClose = (e) => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="-mr-6">
        <Menu>
          <Menu.Button aria-label="menu dropdown">
            <div className="flex flex-row items-center mr-6 transition-shadow bg-white border rounded-full hover:shadow-md">
              <div className="z-10 w-5 h-auto mt-2 mb-1 ml-2">
                <Image src={menuIcon} width={16} height={18} alt="" />
              </div>
              <div className="w-7 mx-2 mt-1.5">
                {session ? (
                  <Image
                    className="h-8 rounded-full"
                    src={loggedInIcon}
                    alt=""
                  />
                ) : (
                  <Image src={userIcon} alt="" />
                )}
              </div>
            </div>
          </Menu.Button>
          <Menu.Items className="absolute right-0 z-10 w-64 h-auto mt-2 text-black origin-top-right bg-white divide-y divide-gray-100 shadow-lg rounded-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col px-1 py-1 text-sm border-b border-gray-200">
              {!loading && !session && (
                <Menu.Item>
                  {({ active }) => (
                    <li
                      as=""
                      className={`${
                        active ? " bg-gray-100" : "bg-white"
                      } w-full font-medium px-3 py-2.5 mx-0 rounded-lg list-none`}
                    >
                      <button
                        className="w-full font-medium text-left"
                        onClick={onClick}
                      >
                        Sign up
                      </button>
                    </li>
                  )}
                </Menu.Item>
              )}
              {session && (
                <Menu.Item>
                  {({ active }) => (
                    <li
                      as=""
                      className={`${
                        active ? " bg-gray-100" : "bg-white"
                      } w-full font-medium px-3 py-2.5 mx-0 rounded-lg list-none`}
                    >
                      <button className="w-full font-medium text-left">
                        Messages
                      </button>
                    </li>
                  )}
                </Menu.Item>
              )}
              {session && (
                <Menu.Item>
                  {({ active }) => (
                    <li
                      as=""
                      className={`${
                        active ? " bg-gray-100" : "bg-white"
                      } w-full font-medium px-3 py-2.5 mx-0 rounded-lg list-none`}
                    >
                      <button className="w-full font-medium text-left">
                        Trips
                      </button>
                    </li>
                  )}
                </Menu.Item>
              )}
              {session && (
                <Menu.Item>
                  {({ active }) => (
                    <li
                      as=""
                      className={`${
                        active ? " bg-gray-100" : "bg-white"
                      } w-full font-medium px-3 py-2.5 mx-0 rounded-lg list-none`}
                    >
                      <button className="w-full font-medium text-left">
                        Wishlists
                      </button>
                    </li>
                  )}
                </Menu.Item>
              )}

              {!session && !loading && (
                <Menu.Item>
                  {({ active }) => (
                    <li
                      as=""
                      className={`${
                        active ? "bg-gray-100" : "bg-white"
                      } w-full px-3 py-2.5 mx-0 rounded-lg list-none`}
                      href="#"
                    >
                      <button className="w-full text-left" onClick={onClick}>
                        Log in
                      </button>
                    </li>
                  )}
                </Menu.Item>
              )}
            </div>
            <div className="flex flex-col px-1 py-1 text-sm">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/fileUpload" href="/fileUpload">
                    <a
                      as=""
                      className={`${
                        active ? "bg-gray-100" : "bg-white"
                      } w-full px-3 py-2.5 mx-0 rounded-lg`}
                      href="#"
                    >
                      Host your home
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    as=""
                    className={`${
                      active ? "bg-gray-100" : "bg-white"
                    } w-full px-3 py-2.5 mx-0 rounded-lg`}
                    href="#"
                  >
                    Host an experience
                  </a>
                )}
              </Menu.Item>
              {session && (
                <div className="flex flex-col px-1 py-1 text-sm border-b border-gray-200">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        as=""
                        className={`${
                          active ? "bg-gray-100" : "bg-white"
                        } w-full px-2 py-2.5 mx-0 rounded-lg`}
                        href="#"
                      >
                        Account
                      </a>
                    )}
                  </Menu.Item>
                </div>
              )}
              <Menu.Item>
                {({ active }) => (
                  <a
                    as=""
                    className={`${
                      active ? "bg-gray-100" : "bg-white"
                    } w-full px-3 py-2.5 mx-0 rounded-lg`}
                    href="#"
                  >
                    Help
                  </a>
                )}
              </Menu.Item>
              {session && (
                <Menu.Item>
                  {({ active }) => (
                    <li
                      as=""
                      className={`${
                        active ? " bg-gray-100" : "bg-white"
                      } w-full font-medium px-3 py-2.5 mx-0 rounded-lg list-none`}
                    >
                      <button
                        type="reset"
                        onClick={(e) => {
                          e.preventDefault();
                          signOut("github");
                        }}
                        className="w-full text-left"
                      >
                        Sign out
                      </button>
                    </li>
                  )}
                </Menu.Item>
              )}
            </div>
          </Menu.Items>
        </Menu>
      </div>
      {showModal && (
        <LoginModal
          open={isOpen}
          onClose={(e) => {
            handleClose(e);
          }}
        />
      )}
    </>
  );
}
