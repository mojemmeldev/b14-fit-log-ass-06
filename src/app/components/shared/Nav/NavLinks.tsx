"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLinks = () => {
  const pathname = usePathname();

  const links = [ { name: "Workouts", href: "/workouts", }, { name: "My Plan", href: "/myplan", }, ];

  return (
    <>
      {links.map((item) => {
        const active = pathname.startsWith(item.href);

        return (
          <li key={item.href}>
            <Link href={item.href} className={`rounded-full px-5 py-2 text-sm font-medium transition ${ active ? "bg-[#1D2A0E] text-[#B6FF00]" : "text-gray-400 hover:text-white" }`} >
              {item.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;