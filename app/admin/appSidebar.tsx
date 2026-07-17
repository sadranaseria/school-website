"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuPlus } from "react-icons/lu";

const sidebarItems: { lable: string; value: string; href: string }[] = [
  { lable: "داشبورد", value: "dashboard", href: "/admin" },
  { lable: "مقالات", value: "articles", href: "/admin/articles" },
  { lable: "گالری", value: "gallery", href: "/admin/gallery" },
  { lable: "رشته ها", value: "majors", href: "/admin/majors" },
];

export function AppSidebar() {
  const pathName = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="font-bold text-3xl">پنل مدیریت</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>خدمات</SidebarGroupLabel>
          <SidebarGroupContent>
            <ul className="space-y-1">
              {sidebarItems.map((sidebarItem) => (
                <li key={sidebarItem.value}>
                  <Link href={sidebarItem.href} 
                        className={classNames({
                            'text-zinc-950' : pathName === sidebarItem.href,
                            'text-zinc-700 hover:text-zinc-800' : pathName !== sidebarItem.href
                        })}
                  >
                    {sidebarItem.lable}
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
