"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../public/icon0.svg";

const NavBar = () => {

  return (
    <nav className="bg-white flex items-center gap-6 fixed top-5">
      <Image width={60} src={logo} alt="logo" />
      <ul className="flex gap-5">
        {links.map((link) => (
          <li key={link.value}>
            <Link href={link.href} className="text-zinc-800 hover:text-zinc-700">
              {link.lebel}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const links: { lebel: string; value: string; href: string }[] = [
  { lebel: "رشته ها", value: "Majros", href: "#majors" },
  { lebel: "گالری آثار", value: "Gallery", href: "#gallery" },
  { lebel: "سوالات متداول", value: "Questions", href: "#questions" },
  { lebel: "قدم های ثبت نام", value: "Roadmap", href: "#roadmap" },
];
export default NavBar;
