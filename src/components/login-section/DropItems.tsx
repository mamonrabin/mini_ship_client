/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import WishList from "../wishList/WishList";

const DropItems = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <div
       
        className="flex items-center cursor-pointer gap-2"
      >
       <Link href="/profile">
        <p className="md:p-2 p-1 rounded-full border border-white bg-[#BDBDBD]">
          <FaUser size={14} />
        </p>
       </Link>
        <p 
         onClick={() => setOpen(!open)}
        className="text-base md:flex hidden items-center gap-1">My Account <IoIosArrowDown size={16} /></p>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="absolute md:w-45 bg-white mt-2 rounded text-gray-500 hover:text-gray-600 duration-300 cursor-pointer px-4 py-6 text-sm flex flex-col gap-1 shadow">
          <Link href="/profile"><p>Account Information</p></Link>
          <Link href="/profile/order"><p>My Orders</p></Link>
          <WishList/>
          <p
          onClick={() => signOut()}
          >Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default DropItems;
