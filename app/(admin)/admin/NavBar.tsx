'use client';

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbSlideshow } from "react-icons/tb";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { LuUniversity } from "react-icons/lu";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TbCirclePlus } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";

const NavBar = () => {
  const pathName = usePathname();
  
  return (
    <ul className="mt-3">
      {sidebarItems.map((sidebarItem) => (
        <li key={sidebarItem.value} className={cn(
          'flex items-center justify-between p-2 rounded-xl hover:text-secondary',
          pathName === sidebarItem.href && 'bg-blue-superlight'
        )}>
          <div className="flex items-center gap-5">
            {sidebarItem.icon}
            <Link href={sidebarItem.href}>
              {sidebarItem.lable}
            </Link>
          </div>  
          {sidebarItem.quickLink && (
            <Link href={`${sidebarItem.href}/new`}><TbCirclePlus className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" /></Link>
          )}
        </li>
      ))}
    </ul>
  );
};

const sidebarItems: { lable: string; value: string; href: string , icon : ReactNode , quickLink ?: boolean }[] = [
  { lable: "داشبورد", value: "dashboard", href: "/admin" , icon : <LuLayoutDashboard className="size-4" />},
  { lable: "گالری", value: "gallery", href: "/admin/gallery" , icon : <TbSlideshow className="size-4" />},
  { lable: "رشته ها", value: "majors", href: "/admin/majors" , icon : <HiOutlineBookOpen className="size-4" /> , quickLink : true},
  { lable: "اخبار", value: "news", href: "/admin/news" , icon : <HiOutlineNewspaper className="size-4" /> , quickLink : true},
  { lable: "قبول شدگان دانشگاه", value: "passUnivercity", href: "/admin/passeds" , icon : <LuUniversity className="size-4" /> , quickLink : true},
  { lable: "سوالات متداول", value: "questions", href: "/admin/questions" , icon : <FaRegQuestionCircle className="size-4" /> , quickLink : true},
  { lable: "قدم های ثبت نام", value: "registerRoadmap", href: "/admin/register-roadmap" , icon : <RiRoadMapLine className="size-4" />},
];

export default NavBar;
