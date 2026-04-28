/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import logo from "@/src/assets/logo/logo.svg";
import Image from "next/image";
import { ShoppingCart, TextAlignJustify, UserRound } from "lucide-react";
import SearchForm from "@/src/form/SearchForm";
import ResponsiveNav from "./ResponsiveNav";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import DropItems from "../login-section/DropItems";

const Navbar = ({ session }: { session: any }) => {
  console.log(session);
  return (
    <div className="bg-[#1299E8] sticky top-0 z-50">
      <nav className="Container flex items-center justify-between py-4 relative  text-white">
        <div className="flex items-center xl:gap-6 gap-4">
          <div className="lg:hidden">
            <ResponsiveNav />
          </div>
          <p className="lg:flex xl:-ml-4 hidden">
            <TextAlignJustify size={28} />
          </p>
          <Link href="/">
            <Image
              className="xl:w-30 lg:w-25 w-25"
              src={logo}
              alt="Logo"
              width={130}
              height={130}
            />
          </Link>
        </div>

        <div className="lg:flex hidden">
          <SearchForm />
        </div>

        <div className="flex items-center md:gap-4 gap-2 text-sm font-medium">
          {session?.user ? (
            <DropItems />
          ) : (
            <Link href="/login">
              <p className="flex items-center gap-1 capitalize md:text-base test-sm">
                <UserRound size={16} /> login
                <span className="md:flex hidden">/ register</span>
              </p>
            </Link>
          )}

          <p className="md:hidden">|</p>
          <Link href="/checkout/cart">
            <p className="flex items-center gap-1 capitalize md:text-base test-sm">
              <ShoppingCart size={16} />{" "}
              <span className="md:flex hidden">Cart(3)</span>
            </p>
          </Link>
        </div>
      </nav>

      <div className="lg:hidden Container -mt-2 pb-2">
        <SearchForm />
      </div>
    </div>
  );
};

export default Navbar;
