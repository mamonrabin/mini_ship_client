"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/src/assets/logo/logo.svg";

import { MailPlus, MapPinHouse, Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const companyLinks = [
  { name: "About Us", href: "/details/about-us" },
  { name: "Privacy Policy", href: "/details/privacy-policy" },
  { name: "Terms & Conditions", href: "/details/terms-and-conditions" },
  { name: "Return Policy", href: "/details/return-policy" },
  { name: "Order Policy", href: "/details/order-policy" },
  { name: "Shipping", href: "#" },
];

const quickLinks = [
  { name: "Why shop with us", href: "#" },
  { name: "Pickaboo Support", href: "#" },
  { name: "Our Store", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Payment", href: "#" },
];

const socialIcons = [
  { icon: <FaFacebook size={16} />, href: "#" },
  { icon: <BsInstagram size={16} />, href: "#" },
  { icon: <BsTwitter size={16} />, href: "#" },
  { icon: <BsYoutube size={16} />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#002F67] py-12">
      <div className="container mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {/* Logo + Info */}
        <div>
          <Image
            src={logo}
            alt="Company Logo"
            width={120}
            height={120}
            priority
          />

          <p className="text-white/70 text-sm mt-4 leading-relaxed">
            Silver Water Technologies Bangladesh Limited nec nisl a purus
            blandit viverra.
          </p>

          <div className="mt-4 space-y-2 text-sm text-white/80">
            <p className="flex items-center gap-2">
              <MapPinHouse size={16} />
              Mirpur-1, Dhaka-1206, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} />
              +8801746770324
            </p>
            <p className="flex items-center gap-2">
              <MailPlus size={16} />
              almamon757@gmail.com
            </p>
          </div>
        </div>

        {/* Company Links */}
        <div className="md:ml-10">
          <h2 className="text-white font-medium">Our Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-white hover:ml-2 transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-medium">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-white hover:ml-2 transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-medium">Newsletter</h2>

          <p className="text-sm text-white/60 mt-4">
            Subscribe for store updates and discounts.
          </p>

          <form className="mt-4 space-y-2">
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full px-4 py-3 text-sm border border-white/40 bg-transparent text-white outline-none placeholder:text-white/50"
            />
            <button
              type="submit"
              className="w-full px-4 py-3 text-sm bg-secondary text-[#262626] hover:bg-black hover:text-white transition"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-2 mt-4">
            {socialIcons.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="p-2 border border-white/40 text-white/60 hover:text-white transition"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
