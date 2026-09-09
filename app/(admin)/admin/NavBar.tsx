'use client';

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiGalleryFill } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaUniversity } from "react-icons/fa";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const pathName = usePathname();

  return (
    <ul className="mt-3">
      {sidebarItems.map((sidebarItem) => (
        <li key={sidebarItem.value} className={cn(
          'flex items-center gap-5 p-2 rounded-xl hover:text-secondary',
          pathName === sidebarItem.href && 'bg-blue-superlight'
        )}>
          {sidebarItem.icon}
          <Link href={sidebarItem.href}>
            {sidebarItem.lable}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const sidebarItems: { lable: string; value: string; href: string , icon : ReactNode }[] = [
  { lable: "داشبورد", value: "dashboard", href: "/admin" , icon : <AiOutlineDashboard className="size-4" />},
  { lable: "گالری", value: "gallery", href: "/admin/gallery" , icon : <RiGalleryFill className="size-4" />},
  { lable: "رشته ها", value: "majors", href: "/admin/majors" , icon : <PiStudentBold className="size-4" />},
  { lable: "اخبار", value: "news", href: "/admin/news" , icon : <HiOutlineNewspaper className="size-4" />},
  { lable: "قبول شدگان دانشگاه", value: "passUnivercity", href: "/admin/passeds" , icon : <FaUniversity className="size-4" />},
];

export default NavBar;
