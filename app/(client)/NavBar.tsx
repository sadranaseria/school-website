"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/icon0.svg";
import useActiveLink from "./store";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const linkId = useActiveLink((state) => state.linkId);
  return (
    <nav className="p-2 flex flex-row-reverse md:flex-row items-center justify-between md:justify-normal gap-2 fixed top-5 left-2 right-2 rounded-xl bg-white shadow-2xl z-10">
      <Image width={50} height={50} src={logo} alt="logo" className="size-10 md:size-14" />
      <ul className="hidden md:flex gap-5">
        {links.map((link) => (
          <li key={link.value}>
            <Link
              href={link.href}
              scroll={true}
              className={
                linkId === link.value
                  ? "text-primary relative"
                  : "text-zinc-900 relative"
              }
            >
              {link.lebel}
              {linkId === link.value && (
                <div className="before:absolute before:w-4 before:-translate-x-1/2 before:left-1/2 before:-bottom-1.5 before:p-0.5 before:bg-primary before:rounded-full"></div>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <Button variant='ghost'>
        <RxHamburgerMenu className="size-5 md:hidden cursor-pointer" />
      </Button>
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
