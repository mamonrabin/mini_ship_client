import React from "react";
import logo from "@/src/assets/logo/logo.svg";
import Image from "next/image";
import { ShoppingCart,  TextAlignJustify,  UserRound } from "lucide-react";
import SearchForm from "@/src/form/SearchForm";
import ResponsiveNav from "./ResponsiveNav";

const Navbar = () => {
  return (
    <div className="bg-[#1299E8]">
      <nav className="Container flex items-center justify-between py-4 relative  text-white">
        <div className="flex items-center xl:gap-6 gap-4">
          <div className="lg:hidden">
            <ResponsiveNav />
          </div>
          <p className="lg:flex xl:-ml-4 hidden"><TextAlignJustify size={28} /></p>
          <Image
            className="xl:w-30 lg:w-25 w-25"
            src={logo}
            alt="Logo"
            width={130}
            height={130}
          />
        </div>

        <div className="lg:flex hidden">
          <SearchForm />
        </div>

        <div className="flex items-center md:gap-4 gap-2 text-sm font-medium">
          <p className="flex items-center gap-1 capitalize md:text-base test-sm">
            <UserRound size={16} /> login
            <span className="md:flex hidden">/ register</span>
          </p>
          <p className="md:hidden">|</p>
          <p className="flex items-center gap-1 capitalize md:text-base test-sm">
            <ShoppingCart size={16} />{" "}
            <span className="md:flex hidden">Cart</span>
          </p>
        </div>
      </nav>

      <div className="lg:hidden Container -mt-2 pb-2">
        <SearchForm />
      </div>
    </div>
  );
};

export default Navbar;
