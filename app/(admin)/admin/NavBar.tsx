'use client';

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  const sidebarItems: { lable: string; value: string; href: string }[] = [
    { lable: "داشبورد", value: "dashboard", href: "/admin" },
    { lable: "گالری", value: "gallery", href: "/admin/gallery" },
    { lable: "رشته ها", value: "majors", href: "/admin/majors" },
    { lable: "اخبار", value: "news", href: "/admin/news" },
  ];

  return (
    <ul className="space-y-1">
      {sidebarItems.map((sidebarItem) => (
        <li key={sidebarItem.value}>
          <Link
            href={sidebarItem.href}
            className={classNames({
              "text-zinc-950": pathName === sidebarItem.href,
              "text-zinc-700 hover:text-zinc-800":
                pathName !== sidebarItem.href,
            })}
          >
            {sidebarItem.lable}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
