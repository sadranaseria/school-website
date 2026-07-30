"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/icon0.svg";
import useActiveLink from "./store";

const NavBar = () => {
  const linkId = useActiveLink((state) => state.linkId);
  return (
    <nav className="p-2 flex items-center gap-6 fixed top-5 left-4 right-4 rounded-xl bg-white shadow-2xl z-10">
      <Image width={50} height={50} src={logo} alt="logo" />
      <ul className="flex gap-5">
        {links.map((link) => (
          <li key={link.value}>
            <Link
              href={link.href}
              scroll={true}
              className={linkId === link.value ? 'text-primary' : 'text-zinc-900'}
            >
              {link.lebel}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const links: { lebel: string; value: string; href: string }[] = [
  { lebel: "رشته ها", value: "majors", href: "#majors" },
  { lebel: "گالری آثار", value: "gallery", href: "#gallery" },
  { lebel: "سوالات متداول", value: "questions", href: "#questions" },
  { lebel: "قدم های ثبت نام", value: "roadmap", href: "#roadmap" },
];
export default NavBar;
