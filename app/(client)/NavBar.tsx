"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../public/icon0.svg";
import useActiveLink from "./store";

const NavBar = () => {
  const [isShow, setShow] = useState(false);
  console.log(isShow);
  const linkId = useActiveLink((state) => state.linkId);

  return (
    <nav className="max-w-200 mx-auto p-2 flex flex-row-reverse md:flex-row items-center justify-between md:justify-center gap-2 fixed top-10 left-2 right-2 rounded-full bg-white shadow-2xl z-30">
      <div className="flex gap-2">
        <Image
          width={50}
          height={50}
          src={logo}
          alt="logo"
          className="size-10 md:size-14"
        />
        {isShow && (
          <div
            className="fixed top-0 right-0 left-0 bottom-0 md:hidden"
            onClick={() => setShow(false)}
          ></div>
        )}
        <ul
          className={cn(
            "fixed md:static top-0 bottom-0 bg-white p-6 space-y-4 md:space-y-0 md:flex items-center gap-5 md:p-0 rounded-l-xl transition-all",
            isShow ? "right-0" : "-right-100",
          )}
        >
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
      </div>
      <Button
        variant="ghost"
        onClick={() => setShow(true)}
        className="md:hidden"
      >
        <RxHamburgerMenu className="size-5 cursor-pointer" />
      </Button>
    </nav>
  );
};

const links: { lebel: string; value: string; href: string }[] = [
  { lebel: "درباره هنرستان", value: "info", href: "#info" },
  { lebel: "رشته ها", value: "majors", href: "#majors" },
  { lebel: "قبولی ها", value: "passeds", href: "#passeds" },
  { lebel: "گالری آثار", value: "gallery", href: "#gallery" },
  { lebel: "اخبار", value: "news", href: "#news" },
  { lebel: "سوالات متداول", value: "questions", href: "#questions" },
  { lebel: "قدم های ثبت نام", value: "roadmap", href: "#roadmap" },
];
export default NavBar;
