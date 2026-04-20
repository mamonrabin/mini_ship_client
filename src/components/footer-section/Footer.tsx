import React from "react";
import logo from "@/src/assets/logo/logo.svg";
import Image from "next/image";
import {

  MailPlus,
  MapPinHouse,
  Phone,

} from "lucide-react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-[#002F67] py-12 Container">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-2 gap-4">
        <div className="">
          <Image src={logo} alt="Logo" width={120} height={120} />
          <div className="text-white/80 mt-4">
            <p className="text-sm">
              Silver Water Technologies Bangladesh Limited  nec nisl a purus blandit viverra. Pellentesque habitant
              morbi tristique senectuse.
            </p>

            <div className="flex flex-col gap-2 mt-4">
              <p className="flex items-center gap-2 text-sm">
                <span>
                  <MapPinHouse size={16} />
                </span>{" "}
                <span>Mirpur-1,Dhaka-1206,Bangladesh</span>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <span>
                  <Phone size={16} />
                </span>{" "}
                <span>+8801746770324</span>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <span>
                  <MailPlus size={16} />
                </span>{" "}
                <span>almamon757@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="md:ml-16">
          <h2 className="text-white text-base">Our Company</h2>

          <ul className="text-white/60 mt-4 flex flex-col gap-2 cursor-pointer text-sm">
            <Link href="#">
              <li className="hover:ml-2 hover:text-white duration-300 cursor-pointer">
                About Us
              </li>
            </Link>
            <Link href="#">
              <li className="hover:ml-2 hover:text-white duration-300 cursor-pointer">
                Contact Us
              </li>
            </Link>
            <Link href="#">
              <li className="hover:ml-2 hover:text-white duration-300 cursor-pointer">
               Why shop with us
              </li>
            </Link>
            <Link href="#">
              <li className="hover:ml-2 hover:text-white duration-300 cursor-pointer">
                Pickaboo Support
              </li>
            </Link>
            <li className="hover:ml-2 hover:text-white duration-300 cursor-pointer">
              Our Store
            </li>
            <li className="hover:ml-2 hover:text-white duration-300 cursor-pointer">
              FAQ
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-base">Quick links</h2>

          <ul className="text-white/60 mt-4 flex flex-col gap-2 cursor-pointer text-sm">
            <Link href="#">
              <li className="hover:ml-2 hover:text-white duration-300 cursor-pointer">
                Privacy Policy
              </li>
            </Link>
            <Link href="#">
              <li className="hover:ml-2 hover:text-white duration-300 cursor-pointer">
                Terms & Conditions
              </li>
            </Link>
            <Link href="#">
              <li className="hover:ml-2 hover:text-white duration-300 cursor-pointer">
                Return Policy
              </li>
            </Link>
            <Link href="#">
              <li className="hover:ml-2 hover:text-white duration-300 cursor-pointer">
                Order Policy
              </li>
            </Link>
            <Link href="#">
              <li className="hover:ml-2 hover:text-white duration-300 cursor-pointer">
                Shipping
              </li>
            </Link>
            <Link href="#">
              <li className="hover:ml-2 hover:text-white duration-300 cursor-pointer">
                Payment
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-base">Sign Up to Newsletter</h2>

          <div className="mt-4">
            <p className="text-sm text-white/60">
              Subscribe for store updates and discounts.
            </p>

            <form className="mt-4">
              <input
                className="border border-white/60 px-4 py-3 text-white outline-none text-sm w-full"
                type="text"
                placeholder="Your Email.."
              />

              <input
                className="px-4 py-3 border border-white/20  hover:bg-black duration-300 cursor-pointer bg-secondary text-[#262626] hover:text-white text-sm mt-2"
                type="submit"
                value="Subscribers"
              />
            </form>

            <div className="flex items-center gap-2 mt-4">
              <p className="p-1.5 border border-white/40  text-white/60 hover:text-white duration-300 cursor-pointer">
                <FaFacebook size={16} />
              </p>
              <p className="p-1.5 border border-white/40  text-white/60 hover:text-white duration-300 cursor-pointer">
                <BsInstagram size={16} />
              </p>
              <p className="p-1.5 border border-white/40  text-white/60 hover:text-white duration-300 cursor-pointer">
                <BsTwitter size={16} />
              </p>
              <p className="p-1.5 border border-white/40  text-white/60 hover:text-white duration-300 cursor-pointer">
                <BsYoutube size={16} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;