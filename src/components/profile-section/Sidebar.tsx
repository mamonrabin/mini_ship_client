"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import infoImg from "@/src/assets/icon/accounts-white.svg";
import infoImg2 from "@/src/assets/icon/orders-white.svg";
import infoImg3 from "@/src/assets/icon/no-review.svg";
import infoImg4 from "@/src/assets/icon/ticket-white.svg";
import infoImg5 from "@/src/assets/icon/clubs-white.svg";
import infoImg6 from "@/src/assets/icon/ReferralTwo.svg";
// import infoImg7 from "@/src/assets/icon/addresses-white.svg";
import infoImg8 from "@/src/assets/icon/payments-white..svg";
import infoImg9 from "@/src/assets/icon/comments-white.svg";

const menuItems = [
  { name: "Account Information", href: "/profile", icon: infoImg },
  { name: "My Orders", href: "/profile/order", icon: infoImg2 },
  { name: "My Product Reviews", href: "/profile/review", icon: infoImg3 },
  { name: "Support Tickets", href: "/profile/tickets", icon: infoImg4 },
  { name: "Pickaboo Club", href: "/profile/club", icon: infoImg5 },
  { name: "Share & Earn", href: "/profile/share", icon: infoImg6 },
  { name: "Manage Addresses", href: "/profile/address", icon: infoImg2 },
  { name: "Saved Payment Methods", href: "/profile/payment", icon: infoImg8 },
  { name: "Help & Knowledge Base", href: "/profile/help", icon: infoImg9 },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="py-4 px-6 bg-white rounded">
      <h2 className="text-xl font-medium mb-4">My Account</h2>

      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <li key={index}>
              <Link
                href={item.href}
                className={`group flex items-center gap-3 p-2 rounded transition
                  ${isActive ? "bg-[#1B5DD5]/10" : "hover:bg-gray-100"}
                `}
              >
                <Image
                  className={`p-2 rounded duration-200
                    ${
                      isActive
                        ? "bg-[#1B5DD5]"
                        : "bg-[#0a0a0a2f] group-hover:bg-[#1B5DD5]"
                    }
                  `}
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                />

                <span
                  className={`font-medium text-lg transition
                    ${
                      isActive
                        ? "text-[#1B5DD5]"
                        : "text-gray-600 group-hover:text-blue-600"
                    }
                  `}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
