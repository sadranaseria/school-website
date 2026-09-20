import { ReactNode } from "react";
import { NewsWithImages } from "./news/types";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineBookOpen, HiOutlineNewspaper } from "react-icons/hi";
import { LuLayoutDashboard, LuUniversity } from "react-icons/lu";
import { RiRoadMapLine } from "react-icons/ri";
import { TbSlideshow } from "react-icons/tb";

export const columns: {
  label: string;
  value: keyof NewsWithImages;
  className?: string;
}[] = [
  { label: "آی دی", value: "id" },
  { label: "عکس", value: "images" },
  { label: "عنوان", value: "title" },
  { label: "توضیحات", value: "description", className: "hidden md:table-cell" },
  ];

export const sidebarItems: {
  lable: string;
  value: string;
  href: string;
  icon: ReactNode;
  quickLink?: boolean;
}[] = [
  {
    lable: "داشبورد",
    value: "admin",
    href: "/admin",
    icon: <LuLayoutDashboard className="size-4" />,
  },
  {
    lable: "گالری",
    value: "gallery",
    href: "/admin/gallery",
    icon: <TbSlideshow className="size-4" />,
  },
  {
    lable: "رشته ها",
    value: "majors",
    href: "/admin/majors",
    icon: <HiOutlineBookOpen className="size-4" />,
    quickLink: true,
  },
  {
    lable: "اخبار",
    value: "news",
    href: "/admin/news",
    icon: <HiOutlineNewspaper className="size-4" />,
    quickLink: true,
  },
  {
    lable: "قبول شدگان دانشگاه",
    value: "passeds",
    href: "/admin/passeds",
    icon: <LuUniversity className="size-4" />,
    quickLink: true,
  },
  {
    lable: "سوالات متداول",
    value: "questions",
    href: "/admin/questions",
    icon: <FaRegQuestionCircle className="size-4" />,
    quickLink: true,
  },
  {
    lable: "قدم های ثبت نام",
    value: "register-roadmap",
    href: "/admin/register-roadmap",
    icon: <RiRoadMapLine className="size-4" />,
  },
];